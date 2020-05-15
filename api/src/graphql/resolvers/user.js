const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getUser: async (parent, _, context) => {
            const user = {
                firstName: context.user.given_name,
                lastName: context.user.family_name,
                email: context.user.email,
            };
            return user;
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            return db("users").insert({ args }, ["id"]);
        },
        updateUser: async (parent, args) => {
            return db("users")
                .where({ id: args.id })
                .update(args.data, ["id", "title"]);
        },
    },
};
