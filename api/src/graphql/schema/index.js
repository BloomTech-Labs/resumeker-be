const { mergeTypes } = require("merge-graphql-schemas");

const root = require("./root");
const user = require("./user");
const resume = require("./resume");

const schemaArray = [root, user, resume];

module.exports = mergeTypes(schemaArray);
