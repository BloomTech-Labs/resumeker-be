const { gql } = require("apollo-server");

const project = gql`
    type Query {
        getProject(projectID: ID!): Project!
        getProjectsByDraft(draftID: ID!): [Project]!
    }
    type Mutation {
        addProject(input: ProjectInput!): Project
        updateProject(projectID: ID!, input: ProjectInput!): Project
        deleteProject(projectID: ID!): Int!
    }
    type Project {
        id: ID!
        draftID: ID!
        title: String
        projectUrl: String
        description: String
        startDate: String
        endDate: String
    }
    input ProjectInput {
        draftID: ID
        title: String
        projectUrl: String
        description: String
        startDate: String
        endDate: String
    }
`;

module.exports = project;
