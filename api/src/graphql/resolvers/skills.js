const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getSkills: async (parent, { userId }) => {
            return db("skills").where({ userId });
        },
    },
    Mutation: {
        createSkill: async (parent, args) => {
            return db("skills").insert({ args }, ["id"]);
        },
        updateSkill: async (parent, args) => {
            return db("skills")
                .where({ id: args.id })
                .update(args.data, ["id", "title"]);
        },
    },
};
