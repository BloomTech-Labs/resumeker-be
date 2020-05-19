const db = require("../../database/config/dbConfig");

const drafts = db("drafts");

module.exports = {
    Query: {
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
        addDraft: () => {},
        updateDraft: () => {},
        deleteDraft: () => {},
    },
};
