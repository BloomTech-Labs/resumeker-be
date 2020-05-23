const db = require("../../database/config/dbConfig");

const drafts = db("drafts");
const roles = db("roles");
const skills = db("skills");
const education = db("education");
const hobbiesTable = db("hobbies");
const workTable = db("workHistory");
const projects = db("projects");

module.exports = {
    Draft: {
        role: async ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            const [result] = await roles.where({ draftID: id });
            return result;
        },
        project: async ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return projects.where({ draftID: id });
        },
        work: ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return workTable.where({ draftID: id });
        },
        education: ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return education.where({ draftID: id });
        },
        skill: ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return skills.where({ draftID: id });
        },
        hobbies: ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return hobbiesTable.where({ draftID: id });
        },
    },
    Query: {
        helloWorld: async (parent, _, { decoded }) => {
            console.log(decoded);
            return "Hello World";
        },
        getDraft: async (_, { draftID }, { decoded }) => {
            const [draft] = await drafts.where({ id: draftID });
            if (decoded.sub === draft.userID) {
                return draft;
            }
            throw Error("This draft does not belong to the user.");
        },
        getDrafts: async (_, __, { decoded }) => {
            const response = await drafts.where({ userID: decoded.sub });

            console.log(response, "get Drafts response");

            return drafts.where({ userID: decoded.sub });
        },
    },
    Mutation: {
        addDraft: async (_, { input }, { decoded }) => {
            const { email, name } = input;
            const [result] = await drafts.insert(
                { email, name, userID: decoded.sub },
                ["id"]
            );

            // WIP feature multi table transaction inserts due to complexity
            // https://stackoverflow.com/questions/40580674/get-knex-js-transactions-working-with-es7-async-await

            return result.id;
        },
        updateDraft: () => {
            return { error: "Work in progress" };
        },
        deleteDraft: () => {
            return { error: "work in progress" };
        },
    },
};
