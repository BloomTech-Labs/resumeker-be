const { gql } = require("apollo-server");

const user = gql`
    type Query {
        getUser(id: ID!): User
        getAllUsers: [User!]!
    }

    type Mutation {
        createUser: User!
        updateUser(id: ID!): User!
    }

    type User {
        id: ID!
    }
`;

module.exports = user;
