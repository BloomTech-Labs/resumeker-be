const db = require('../database/config/dbConfig');

module.exports =  {
    Query: {
    users(_, args, ctx) {
        return db("users");
        },
    user(_, { id }) {
        return db("users").where({ id }).first();
        },
    },
    Mutation: {
        createUser: (_, args) => {
        return db("users").insert(args)
        }
    }
};