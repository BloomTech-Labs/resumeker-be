const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getLanguages: async (parent, { userId }) => {
            return db("languages").where({ userId });
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
