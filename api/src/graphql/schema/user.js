const { gql } = require("apollo-server");

const user = gql`
    type Query {
        getUser(id: ID!): User
        getAllUsers: [User!]!
    }

    type Mutation {
        createUser(id: ID!): User!
        updateUser(id: ID!): User!
    }

    type User {
        id: ID!
        firstName: String
        lastName: String
        email: String
    }
`;

module.exports = user;
