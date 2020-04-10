const { gql } = require('apollo-server-express')

module.exports =  {
    Query: {
    hello: (_, {name}) => {
           return {message:`Hi ${name}`}
        },
    getUser: (parent, args, {models}) => {
                models.User.findOne({where: args.id })
        },
    allUsers: (parent, args, {models}) => {
                models.User.find({})
        },
    },
    Mutation: {
        createUser: (parent, args, { models }) => {
            models.User.create(args)
        }
    }
};   