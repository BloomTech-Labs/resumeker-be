const { gql } = require('apollo-server-express')

module.exports =  {
    Query: {
    hello: (_, {name}) => {
           return {message:`Hi ${name}`}
        },
    getUser: (parent, args, {models}) => {
                models.User.findAll({
                                    where: {
                                        userId:args.userId 
                                        }
                                    })
        },
    allUsers: (parent, args, {models}) => {
            return models.User.findAll()
        },
    },
    Mutation: {
        createUser: (parent, args, { models }) => {
            return models.User.create(args)
        }
    }
};   