const { gql } = require("apollo-server");

const education = gql`
    type Query {
        getEducation(userId: ID!): [EducationHistory]!
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
        userId: ID
        schoolType: SchoolType
        schoolName: String
        startDate: String
        endDate: String
        certName: String
        courses: String
    }

    enum SchoolType {
        HIGH_SCHOOL_OR_EQUIVALENT
        UNDERGRADUATE
        BOOTCAMP_OR_EQUIVALENT
        POST_SECONDARY
    }
`;

module.exports = education;
