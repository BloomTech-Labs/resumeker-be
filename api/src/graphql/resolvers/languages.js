const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getLanguages: async (parent, { userId }) => {
            return db("languages").where({ userId });
        },
    },
    Mutation: {
        createLanguage: async (parent, args) => {
            // create language logic
        },
        updateLanguage: async (parent, args) => {
            // update language logic
        },
    },
};
