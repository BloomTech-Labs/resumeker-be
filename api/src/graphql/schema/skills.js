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
        text: String
        skillType: SkillType
    }

    input SkillInput {
        text: String
        skillType: SkillType
    }

    enum SkillType {
        TECHNICAL
        QUALITATIVE
    }
`;

module.exports = skills;
