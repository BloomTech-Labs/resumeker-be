const { gql } = require('apollo-server-express')

module.exports = gql`
    type User {
        id: ID!,
        email: String,
        userImageURL: String!,
        firstName: String, 
        lastName: String, 
    },

    type Query{
        users: [User]!
        user(id: ID!): User!
    },

    type Mutation{
        createUser(
                email: String!,
                userImageURL: String!,
                firstName: String!,
                lastName: String!
        ):
        User,
    }
`;