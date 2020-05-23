const { gql } = require("apollo-server");

const role = gql`
    # Role is the Job the user is applying for
    type Query {
        getRole(roleID: ID!): Role!
    }
    type Mutation {
        addRole(input: RoleInput!): Role!
        updateRole(roleID: ID!, input: RoleInput): Role!
    }
    type Role {
        id: ID!
        draftID: ID
        name: String
    }
    input RoleInput {
        draftID: ID
        name: String
    }
`;

module.exports = role;
