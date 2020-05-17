const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getProjects: async (parent, { userId }) => {
            return db("projects").where({ userId });
        },
    },
    Mutation: {
        createProject: async (parent, args) => {
            return db("projects").insert({ args }, ["id"]);
        },
        updateProject: async (parent, args) => {
            return db("projects")
                .where({ id: args.id })
                .update(args.data, ["id", "title"]);
        },
    },
};
