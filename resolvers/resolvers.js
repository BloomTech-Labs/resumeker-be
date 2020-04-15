const { gql } = require('apollo-server-express')

module.exports =  {
    Query: {
    hello: (_, {name}) => {
           return {message:`Hi ${name}`}
        },
    users(parent, args, ctx) {
        return db("users");
        },
    user(_, { id }) {
        return db("users").where({ id }).first();
        },
    },
    Mutation: {
        createUser: (parent, args, { models }) => {
            models.User.create(args)
        }
    }
};   