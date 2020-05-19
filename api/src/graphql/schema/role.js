const { gql } = require("apollo-server");

const role = gql`
    # Role is the Job the user is applying for
    type Query {
        getRole(userID: ID!): Role!
    }
    type Mutation {
        addRole(id: ID!): Role!
        updateRole(id: ID!): Role!
    }
    type Role {
        id: ID!
        userID: ID!
        name: String
    }
    input RoleInput {
        userID: ID!
        name: String
    }
`;

module.exports = role;
