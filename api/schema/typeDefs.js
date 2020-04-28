const { gql } = require("apollo-server-express");

module.exports = gql`
    type Query {
        getUser: User
        allUsers: [User]!
    }
    type User {
        id: ID!
        firstName: String
        lastName: String
        email: String
    }
`;
