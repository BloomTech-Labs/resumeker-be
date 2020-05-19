const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getQuestions: async (parent, { roleId }) => {
            return db("questions").where({ roleId });
        },
    },
    Mutation: {
        addQuestion: async (parent, args) => {
            return db("questions").insert({ args }, ["id"]);
        },
        updateQuestion: async (parent, args) => {
            return db("questions")
                .where({ id: args.id })
                .update(args.data, ["id", "title"]);
        },
    },
};
