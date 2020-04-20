const { gql } = require('apollo-server-express')

module.exports = gql`

    type User {
        id: ID!,
        email: String,
        firstName: String, 
        lastName: String, 
    },
    type Token{
        token: String
    },
    type hello{
        message: String
    },
    type userInfo{
        userInfo: String
    },
    type Query{
        getUser: userInfo
        allUsers:[User]!
        getToken(token: String): Token
        getUpdatedUser(id: ID): User
        getString(bla: String): hello
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
        getUpdatedUser(
                id: ID!,
                email: String,
                firstName: String, 
                lastName: String, 
            ): User
    },

`;