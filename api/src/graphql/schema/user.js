const { gql } = require("apollo-server");

const user = gql`
    type Query {
        getUser(id: ID!): User
        getAllUsers: [User!]!
    }

    type Mutation {
        updateUser(
            id: ID!
            firstName: String
            lastName: String
            email: String
        ): User
    }

    type User {
        id: ID!
        firstName: String
        lastName: String
        email: String
    }
`;

module.exports = user;
