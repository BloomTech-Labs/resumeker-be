const { mergeTypes } = require("merge-graphql-schemas");

const root = require("./root");
const user = require("./user");
const draft = require("./draft");
const role = require("./role");
const work = require("./work");
const skills = require("./skills");
const education = require("./education");
const project = require("./project");
const questions = require("./questions");
const hobby = require("./hobby");
const languages = require("./languages");

const schemaArray = [
    root,
    // user,
    draft,
    role,
    work,
    skills,
    education,
    project,
    questions,
    hobby,
    languages,
];

module.exports = mergeTypes(schemaArray);
