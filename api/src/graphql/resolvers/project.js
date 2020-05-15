const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getProject: async (parent, { userId }, _) => {
            return db("projects").where({ userId });
        },
    },
    Mutation: {
        createProject: async (parent, { userId }, _) => {
            // function
        },
        updateProject: async (parent, { userId }, _) => {
            // function
        },
    },
};
