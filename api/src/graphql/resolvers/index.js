const mergeResolvers = require("graphql-merge-resolvers");

const draft = require("./draft");
const role = require("./role");
const work = require("./work");
const skills = require("./skills");
const education = require("./education");
const project = require("./project");
const hobby = require("./hobby");
const languages = require("./languages");

const mainResolver = [
    draft,
    role,
    work,
    skills,
    education,
    project,
    hobby,
    languages,
];

module.exports = mergeResolvers.merge(mainResolver);
