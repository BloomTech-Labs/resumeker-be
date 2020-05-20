const { gql } = require("apollo-server");

const education = gql`
    type Query {
        getEducationHistory(draftID: ID!): [EducationHistory]!
    }

    type Mutation {
        addEducationHistory(
            draftID: ID!
            input: EducationHistoryInput
        ): EducationHistory

        updateEducationHistory(
            educationHistoryID: ID!
            input: EducationHistoryInput
        ): EducationHistory
    }

    type EducationHistory {
        id: ID!
        schoolType: SchoolType
        schoolName: String
        startDate: String
        endDate: String
        certName: String
        courses: String
    }

    input EducationHistoryInput {
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
