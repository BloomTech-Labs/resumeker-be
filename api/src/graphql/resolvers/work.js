const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getWorkHistory: async (parent, { draftID }) => {
            return db("workHistory").where({ draftID });
        },
    },
    Mutation: {
        addWorkHistory: async (parent, args) => {
            return db("workHistory").insert({ args }, ["id"]);
        },
        updateWorkHistory: async (parent, args) => {
            return db("workHistory")
                .where({ userId: args.userId })
                .update(args.data, ["id", "title"]);
        },
    },
};
