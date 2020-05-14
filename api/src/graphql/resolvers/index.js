const mergeResolvers = require("graphql-merge-resolvers");

const user = require("./user");
const draft = require("./draft");
const role = require("./role");
const work = require("./work");
const skills = require("./skills");
const education = require("./education");
const project = require("./project");
const questions = require("./questions");
const hobby = require("./hobby");

const mainResolver = [
    user,
    draft,
    role,
    work,
    skills,
    education,
    project,
    questions,
    hobby,
];

module.exports = mergeResolvers.merge(mainResolver);
