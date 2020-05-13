const { gql } = require("apollo-server");

const draft = gql`
    # type Query {
    # getDraft
    # }

    # type Mutation {
    # draft mutations
    # }

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
