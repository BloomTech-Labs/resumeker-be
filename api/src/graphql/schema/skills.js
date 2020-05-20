const { gql } = require("apollo-server");

const skills = gql`
    type Query {
        getSkills: [Skill!]!
    }
    type Mutation {
        addSkill(id: ID!): Skill!
        updateSkill(id: ID!): Skill!
    }

    type Skill {
        id: ID!
        draftID: ID!
        text: String
        skillType: SkillType
    }

    input SkillInput {
        draftID: ID
        text: String
        skillType: SkillType
    }

    enum SkillType {
        TECHNICAL
        QUALITATIVE
    }
`;

module.exports = skills;
