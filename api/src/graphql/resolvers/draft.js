const db = require("../../database/config/dbConfig");

const drafts = db("draft");

module.exports = {
    Query: {
        getDraft: async (_, { draftID }, { decoded }) => {
            // verify that the draft belongs to the user
            const [draft] = await drafts.where({ id: draftID });
            if (decoded.sub === draft.user_id) {
                return draft;
            }
            throw Error("This draft does not belong to the user.");
        },
        getDrafts: async (_, __, { decoded }) => {},
    },
    Mutation: {},
};
