const { gql } = require("apollo-server");

const project = gql`
    type Project {
        id: ID!
        title: String
        role: Role
        projectUrl: String
        description: String
    }
`;

module.exports = project;
