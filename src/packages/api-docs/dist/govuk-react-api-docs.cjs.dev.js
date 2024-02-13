'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var path = require('path');
var glob = require('glob-promise');
var chalk = require('chalk');
var util = require('util');
var _ = require('lodash');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var path__default = /*#__PURE__*/_interopDefault(path);
var glob__default = /*#__PURE__*/_interopDefault(glob);
var chalk__default = /*#__PURE__*/_interopDefault(chalk);
var ___default = /*#__PURE__*/_interopDefault(_);

function stringOfLength(string, length) {
  let newString = '';
  for (let i = 0; i < length; i += 1) {
    newString += string;
  }
  return newString;
}

function generateTitle(name) {
  const title = `${name}`;
  return `${title}\n${stringOfLength('=', title.length)}\n`;
}

function generateImportText(name, folderName) {
  return `### Import
\`\`\`js
  import ${name} from '@govuk-react/${folderName}';
\`\`\``;
}

function generateDescription(description) {
  let imagePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return `${imagePath ? `![Component Image](${imagePath})` : ''}
${description}\n`;
}

function generatePropType(type) {
  let values;
  if (Array.isArray(type.value)) {
    values = `(${type.value.map(typeValue => typeValue.name || typeValue.value).join(' \\| ')})`;
  } else {
    values = type.value;
  }
  return `${type.name}${values || ''}`;
}

function generatePropDefaultValue(value) {
  /**
   * Format default props to be on one line in order
   * to render vartypes like objects in Markdown tables
   */
  const formattedValue = value?.value?.replace?.(/\n|\r/g, ' ');
  return `${formattedValue}`;
}

function generatePropDescription(description) {
  // Allow multi-line descriptions
  return description.replace(/\n/g, '<br/>');
}

function escapeForTable(text) {
  return text.replace(/\|/g, '\\|');
}

function generateProp(propName, prop) {
  const defaultValue = prop.defaultValue ? `\`\`\`${generatePropDefaultValue(prop.defaultValue)}\`\`\`` : '';
  const propType = prop.type ? generatePropType(prop.type) : '';
  const description = prop.description ? generatePropDescription(prop.description) : '';
  return ` \`${escapeForTable(propName)}\` | ${prop.required ? 'true' : ''} | ${defaultValue} | ${escapeForTable(propType)} | ${escapeForTable(description)}`;
}

function generateProps(props) {
  if (!props) {
    return '';
  }
  return '### Properties\n' + 'Prop | Required | Default | Type | Description\n' + ':--- | :------- | :------ | :--- | :----------\n' + `${props && Object.keys(props).sort().map(propName => generateProp(propName, props[propName])).join('\n')}\n\n`;
}

function generateMarkdown(name, folderName, reactAPI) {
  const markdownString = `${generateTitle(name)}
${generateImportText(name, folderName)}
<!-- STORY -->
${generateDescription(reactAPI.description)}
${generateProps(reactAPI.props)}
`;
  return markdownString;
}

/* eslint-disable no-await-in-loop, no-console */

// components is imported via require so that we can parse the names of exports
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const components = require('govuk-react');
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const docgen = require('react-docgen-typescript');
function getComponentFolderName(file) {
  // '/' rather than 'path.sep' as, on Windows, the path has already been converted at this point
  const dirs = path__default["default"].dirname(file).split('/');
  let dir = dirs[dirs.length - 1];
  if (dir === 'src' || dir === 'lib') {
    dir = dirs[dirs.length - 2];
  }
  return dir;
}
function getComponentNameFromFile(file) {
  const folderName = getComponentFolderName(file);
  return ___default["default"].chain(folderName).camelCase().upperFirst().value();
}
function getMarkdownForComponent(file) {
  const componentName = getComponentNameFromFile(file);
  const p = path__default["default"].resolve(__dirname, file);
  let componentInfo;
  const parsedComponents = docgen.parse(p);
  if (parsedComponents.length > 1) {
    componentInfo = parsedComponents.find(parsedComponent => parsedComponent.displayName === componentName);
    if (!componentInfo) {
      console.warn('more than one component found and no matching displayName found');
      console.warn(parsedComponents.map(_ref => {
        let {
          filePath,
          displayName
        } = _ref;
        return {
          filePath,
          displayName
        };
      }));
      [componentInfo] = parsedComponents;
    }
  } else {
    [componentInfo] = parsedComponents;
    if (componentInfo.displayName !== componentName) {
      console.warn('displayName does not match component name', componentInfo.displayName, componentName);
    }
  }
  const componentFolderName = getComponentFolderName(file);
  return generateMarkdown(componentName, componentFolderName, componentInfo);
}
async function generateApiForFile(file) {
  try {
    const componentName = getComponentNameFromFile(file);
    const md = getMarkdownForComponent(file);
    console.log(chalk__default["default"].green('API Documented:'), componentName);
    return md;
  } catch (e) {
    console.error(chalk__default["default"].red('Error documenting component:'), file, e.message);
    throw e;
  }
}
function shouldDocumentComponent(file) {
  // only document components that are exported from packages/govuk-react/src/index.ts
  const name = getComponentNameFromFile(file);
  return Object.prototype.hasOwnProperty.call(components, name);
}
async function generateApiForFiles(files) {
  let md = '';
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    if (shouldDocumentComponent(file)) {
      md += await generateApiForFile(file);
    }
  }
  return md;
}

// Unix-like shells require quotation marks around
// arguments on the command line to prevent path expansion,
// whereas windows requires no quotation marks.
// This approach is to support more shells.
function dequote(string) {
  return string.replace(/^'(.*)'$/, '$1');
}
async function apiDocs(relDir, outputMd) {
  const relDirNoQuotation = dequote(relDir);
  const outputMdNoQuotation = dequote(outputMd);
  const files = await glob__default["default"](path__default["default"].resolve(process.cwd(), relDirNoQuotation));
  const md = await generateApiForFiles(files);
  await util.promisify(fs__default["default"].writeFile)(outputMdNoQuotation, md);
}

exports["default"] = apiDocs;
