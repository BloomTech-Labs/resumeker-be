const { gql } = require("apollo-server");

const skills = gql`
    type Query {
        getSkill(skillID: ID!): [Skill]
        getSkillsByDraft(draftID: ID!): [Skill]!
    }
    type Mutation {
        addSkill(input: SkillInput): Skill!
        updateSkill(skillID: ID!, input: SkillInput): Skill!
        deleteSkill(skillID: ID!): Int!
    }

    type Skill {
        id: ID!
        draftID: ID!
        name: String
        skillType: SkillType
    }

    input SkillInput {
        draftID: ID
        name: String
        skillType: SkillType
    }

    enum SkillType {
        Technical
        Qualitative
    }
`;

module.exports = skills;
