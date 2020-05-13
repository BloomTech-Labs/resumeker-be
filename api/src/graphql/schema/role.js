const { gql } = require("apollo-server");

const role = gql`
    # Role is the Job the user is applying for
    type Role {
        id: ID!
        name: String
        description: String
    }

    input RoleInput {
        name: String
        description: String
    }
`;

module.exports = role;
