const { gql } = require("apollo-server");

const education = gql`
    #type Query {
    # getEduHistory
    #}

    #type Mutation {
    # eduHistory mut
    #}

    type EducationHistory {
        id: ID!
        schoolType: SchoolType
        schoolName: String
        startDate: String
        endDate: String
        certName: String
    }

    enum SchoolType {
        HIGH_SCHOOL_OR_EQUIVALENT
        UNDERGRADUATE
        BOOTCAMP_OR_EQUIVALENT
        POST_SECONDARY
    }
`;

module.exports = education;
