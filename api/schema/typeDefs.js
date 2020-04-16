const { gql } = require('apollo-server-express')

module.exports = gql`

    type User {
        id: ID!,
        email: String,
        userImageURL: String!,
        first_name: String, 
        last_name: String, 
    },
    type Token{
        token: String
    },
    type Query{
        getUser(id: ID): User
        allUsers:[User]!
        getToken(token: String): Token
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