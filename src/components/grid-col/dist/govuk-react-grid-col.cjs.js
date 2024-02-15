'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-grid-col.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-grid-col.cjs.dev.js");
}