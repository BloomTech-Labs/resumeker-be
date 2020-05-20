const { gql } = require("apollo-server");

const draft = gql`
    type Query {
        getDraft(draftID: ID!): Draft!
        getDrafts: [Draft]!
    }

    type Mutation {
        addDraft: Int!
        updateDraft(
            draftID: ID!
            role: RoleInput
            project: ProjectInput
            work: [WorkHistoryInput]
            education: [EducationHistoryInput]
            skill: [SkillInput]
            hobbies: [HobbyInput]
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
