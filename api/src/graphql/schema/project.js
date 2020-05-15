const { gql } = require("apollo-server");

const project = gql`
    type Query {
        getProject(userId: ID!): Project!
        getProjects(userId: ID!): [Project!]!
    }

    type Mutation {
        createProject: Project
        updateProject: Project
    }

    type Project {
        id: ID!
        userId: ID!
        title: String
        role: Role
        projectUrl: String
        description: String
    }
`;

module.exports = project;
