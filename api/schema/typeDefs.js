const { gql } = require("apollo-server-express");

module.exports = gql`
    type Query {
        getUser: User
        allUsers: [User]!
        getUpdatedUser: User
    }
    type Mutation {
        createUser(data: CreateUserInput!): User
    }
    type User {
        id: ID!
        firstName: String
        lastName: String
        email: String
    }
    input CreateUserInput {
        id: ID
        firstName: String!
        lastName: String
        email: String
    }
`;
