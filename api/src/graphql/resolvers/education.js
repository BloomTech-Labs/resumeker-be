const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getEducationHistory: async (__, { userId }) => {
            return db("education").where({ userId });
        },
    },
    Mutation: {
        createEducationHistory: async (parent, { userId }, ctx) => {
            // function
        },
        updateEducationHistory: async (parent, { userId }, ctx) => {
            // function
        },
    },
};
