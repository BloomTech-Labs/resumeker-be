const db = require("../../database/config/dbConfig");

const drafts = db("drafts");

module.exports = {
    Query: {
        helloWorld: async (parent, _, { decoded }) => {
            console.log(decoded);
            return "Hello World";
        },
        getDraft: async (_, { draftID }, { decoded }) => {
            const [draft] = await drafts.where({ id: draftID });
            if (decoded.sub === draft.user_id) {
                return draft;
            }
            throw Error("This draft does not belong to the user.");
        },
        getDrafts: (_, __, { decoded }) =>
            drafts.where({ user_id: decoded.sub }),
    },
    Mutation: {
        addDraft: async (_, { email, name }, { decoded }) => {
            const [result] = await drafts.insert(
                { email, name, userID: decoded.sub },
                ["id"]
            );
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
