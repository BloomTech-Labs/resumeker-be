const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getSkills: async (parent, { userID }) => {
            return db("skills").where({ userID });
        },
    },
    Mutation: {
        addSkill: async (parent, args) => {
            return db("skills").insert({ args }, ["id"]);
        },
        updateSkill: async (parent, args) => {
            return db("skills")
                .where({ id: args.id })
                .update(args.data, ["id", "title"]);
        },
    },
};
