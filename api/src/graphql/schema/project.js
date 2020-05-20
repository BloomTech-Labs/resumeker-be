const { gql } = require("apollo-server");

const project = gql`
    type Query {
        getProject(projectID: ID!): Project!
        getProjects(draftID: ID!): [Project!]!
    }
    type Mutation {
        addProject(input: ProjectInput): Project
        updateProject(projectID: ID!, input: ProjectInput): Project
    }
    type Project {
        id: ID!
        draftID: ID!
        title: String
        projectURL: String
        description: String
    }
    input ProjectInput {
        draftID: ID
        title: String
        projectURL: String
        description: String
    }
`;

module.exports = project;
