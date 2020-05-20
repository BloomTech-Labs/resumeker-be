const db = require("../../database/config/dbConfig");
const HOBBIES = db("hobbies");

module.exports = {
    Query: {
        getHobbies: (__, { userID }) => {
            return db("hobbies").where({ userID });
        },
    },
    Mutation: {
        addHobby: async (
            _,
            { input, draftID: id },
            { decoded, throwAuthError }
        ) => {
            const draft = await db(HOBBIES).where({ id });
            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }
        },
        updateHobby: async () => {
            // function
        },
    },
};
