const { gql } = require("apollo-server");

const education = gql`
    type Query {
        getEducationHistory(userId: ID!): [EducationHistory]!
    }

    type Mutation {
        createEducationHistory(
            schoolType: SchoolType
            schoolName: String
            startDate: String
            endDate: String
            certName: String
            courses: String
        ): EducationHistory
        updateEducationHistory: EducationHistory
    }

    type EducationHistory {
        id: ID!
        userId: ID!
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
