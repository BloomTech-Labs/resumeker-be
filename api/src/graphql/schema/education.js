const { gql } = require("apollo-server");

const education = gql`
    type Query {
        getEducationHistory(id: ID!): EducationHistory
        getEducationByDraft(draftID: ID!): [EducationHistory]!
    }

    type Mutation {
        addEducationHistory(input: EducationHistoryInput): EducationHistory
        updateEducationHistory(
            id: ID!
            input: EducationHistoryInput
        ): EducationHistory
        deleteEducation(id: ID!): Int!
    }

    type EducationHistory {
        id: ID!
        draftID: ID!
        schoolType: SchoolType
        schoolName: String
        startDate: String
        endDate: String
        certName: String
        courses: String
    }

    input EducationHistoryInput {
        draftID: ID
        schoolType: SchoolType
        schoolName: String
        startDate: String
        endDate: String
        certName: String
        courses: String
    }

    enum SchoolType {
        UNDERGRADUATE
        CERTIFICATION
        GRADUATE
        COURSE
    }
`;

module.exports = education;
