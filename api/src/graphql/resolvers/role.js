const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getRole: async (parent, { userID }) => {
            return db("roles").where({ userID });
        },
    },
    Mutation: {
        addRole: async (parent, args) => {
            return db("roles").insert({ args }, ["id"]);
        },
        updateRole: async (parent, args) => {
            return db("roles")
                .where({ id: args.id })
                .update(args.data, ["id", "title"]);
        },
    },
};
