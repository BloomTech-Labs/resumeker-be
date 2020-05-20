const { gql } = require("apollo-server");

const draft = gql`
    type Query {
        getDraft(draftID: ID!): Draft!
        getDrafts: [Draft]!
    }

    type Mutation {
        addDraft(email: String, name: String): Int!
        updateDraft(
            draftID: ID!
            role: RoleInput
            project: ProjectInput
            work: [WorkHistoryInput]
            education: [EducationHistoryInput]
            skill: [SkillInput]
            hobbies: [String]
        ): Draft!
        deleteDraft: Boolean
    }
    type Draft {
        id: ID!
        user: ID!
        email: String!
        name: String!
        role: Role
        project: [Project]
        work: [WorkHistory]
        education: [EducationHistory]
        skill: [Skill]
        hobbies: [Hobby]
    }
`;

module.exports = draft;
