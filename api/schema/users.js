const { gql } = require('apollo-server-express')

module.exports = gql`

    type User {
        id: ID!,
        email: String,
        userId: String,
        userImageURL: String!,
        firstName: String, 
        lastName: String, 
    },
    type Query{
        getUser(userId: String): User,
        allUsers:[User],
    },
    type Mutation{
        createUser(userName: String!, 
                    email: String!,
                    userId: String!,
                    userImageURL: String!,
                    firstName: String!,
                    lastName: String!
                ):User,
    }
`;