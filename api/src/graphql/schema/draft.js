const { gql } = require("apollo-server");

const draft = gql`
    type Query {
        getDraft(draftID: ID!): Draft!
        getAllDrafts: [Draft!]!
    }

    type Mutation {
        # returns ID of Draft created
        addDraft(input: DraftInput): Int!
        updateDraft(draftID: ID!, input: DraftInput): Draft!
        deleteDraft(draftID: ID!): Boolean
    }
    type Draft {
        id: ID!
        userID: ID!
        email: String!
        name: String!
        role: Role
        project: [Project]
        work: [WorkHistory]
        education: [EducationHistory]
        skill: [Skill]
        hobbies: [Hobby]
    }

    input DraftInput {
        email: String!
        name: String!
        role: [String]
        project: [ProjectInput]
        work: [WorkHistoryInput]
        education: [EducationHistoryInput]
        skill: [SkillInput]
        hobbies: [String]
    }
`;

module.exports = draft;
