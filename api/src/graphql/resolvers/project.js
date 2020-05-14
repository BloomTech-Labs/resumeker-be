const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getProject: async (parent, { userId }, _) => {
            return db("projects").where({ userId });
        },
    },
};
