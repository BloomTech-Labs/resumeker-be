const { gql } = require("apollo-server");

const skills = gql`
    # type Mutation {
    # figure out skills mutations
    # }

    type Skill {
        id: ID!
        text: String
        skillType: SkillType
    }

    enum SkillType {
        TECHNICAL
        QUALITATIVE
    }
`;

module.exports = skills;
