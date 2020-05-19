const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getLanguages: async (parent, { userID }) => {
            return db("languages").where({ userID });
        },
    },
    Mutation: {
        addLanguage: async (parent, args) => {
            // add language logic
        },
        updateLanguage: async (parent, args) => {
            // update language logic
        },
    },
};
