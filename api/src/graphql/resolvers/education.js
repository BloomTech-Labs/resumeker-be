const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getEducationHistory: async (parent, { userId }, _) => {
            return db("education").where({ userId });
        },
    },
};
