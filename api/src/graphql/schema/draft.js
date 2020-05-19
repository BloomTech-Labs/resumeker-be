const { gql } = require("apollo-server");

const draft = gql`
    type Query {
        getDraft(draftID: ID!): Draft!
        getDrafts: [Draft]!
    }
    type Draft {
        id: ID!
        user: User!
        role: Role
        project: [Project]
        work: [WorkHistory]
        education: [EducationHistory]
        skill: [Skill]
        hobbies: [Hobby]
    }
`;

module.exports = draft;
