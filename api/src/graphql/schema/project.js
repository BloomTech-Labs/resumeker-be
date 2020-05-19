const { gql } = require("apollo-server");

const project = gql`
    type Query {
        getProject(userID: ID!): Project!
        getProjects(userID: ID!): [Project!]!
    }

    type Mutation {
        addProject: Project
        updateProject: Project
    }

    type Project {
        id: ID!
        userID: ID!
        title: String
        role: Role
        projectUrl: String
        description: String
    }
    input ProjectInput {
        userID: ID!
        title: String
        role: RoleInput
        projectUrl: String
        description: String
    }
`;

module.exports = project;
