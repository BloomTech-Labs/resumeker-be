const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getProjects: async (parent, { userID }) => {
            return db("projects").where({ userID });
        },
    },
    Mutation: {
        addProject: async (parent, args) => {
            return db("projects").insert({ args }, ["id"]);
        },
        updateProject: async (parent, args) => {
            return db("projects")
                .where({ id: args.id })
                .update(args.data, ["id", "title"]);
        },
    },
};
