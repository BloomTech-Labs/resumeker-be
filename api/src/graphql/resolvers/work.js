const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getWorkHistory: async (parent, { userId }, __) => {
            return db("workHistory").where({ userId });
        },
    },
};
