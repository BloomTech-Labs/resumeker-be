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
        getUser(id: ID): User
        allUsers:[User]!
    },
    input CreateUserInput{
        id: ID!,
        email: String!,
        userImageURL: String!,
        firstName: String!,
        lastName: String!
    },
    type Mutation{
        createUser(data: CreateUserInput!):User,
    }
`;