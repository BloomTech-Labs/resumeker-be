const { gql } = require("apollo-server");

const education = gql`
    type Query {
        getEducation(userID: ID!): [EducationHistory]!
    }

    type Mutation {
        addEducation(
            schoolType: SchoolType!
            schoolName: String!
            startDate: String
            endDate: String
            certName: String
        ): EducationHistory

        updateEducation(
            educationID: ID!
            schoolType: SchoolType
            schoolName: String
            startDate: String
            endDate: String
            certName: String
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
