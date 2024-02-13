'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-api-docs.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-api-docs.cjs.dev.js");
}
