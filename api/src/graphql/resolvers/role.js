const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getRole: async (parent, { userId }) => {
            return db("roles").where({ userId });
        },
    },
    Mutation: {
        createRole: async (parent, args) => {
            return db("roles").insert({ args }, ["id"]);
        },
        updateRole: async (parent, args) => {
            return db("roles")
                .where({ id: args.id })
                .update(args.data, ["id", "title"]);
        },
    },
};
