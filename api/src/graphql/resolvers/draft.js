const db = require("../../database/config/dbConfig");

module.exports = {
    Draft: {
        role: async ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            const [result] = await db("roles").where({ draftID: id });
            return result;
        },
        project: async ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return db("projects").where({ draftID: id });
        },
        work: ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return db("workHistory").where({ draftID: id });
        },
        education: ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return db("education").where({ draftID: id });
        },
        skill: ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return db("skills").where({ draftID: id });
        },
        hobbies: ({ id, userID }, _, { decoded, throwAuthError }) => {
            if (userID !== decoded.sub) {
                throwAuthError();
            }
            return db("hobbies").where({ draftID: id });
        },
    },
    Query: {
        helloWorld: async (parent, _, { decoded }) => {
            /* eslint-disable no-console */
            console.log(decoded);
            return "Hello World";
        },
        getDraft: async (_, { id }, { decoded }) => {
            const [draft] = await db("drafts").where({ id: id });
            if (decoded.sub === draft.userID) {
                return draft;
            }
            throw Error("This draft does not belong to the user.");
        },
        getDrafts: async (_, __, { decoded }) => {
            const newDrafts = await db("drafts").where({ userID: decoded.sub });
            return newDrafts;
        },
    },
    Mutation: {
        addDraft: async (_, { input }, { decoded }) => {
            const { email, name } = input;
            const [result] = await db("drafts").insert(
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
