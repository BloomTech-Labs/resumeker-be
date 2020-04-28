const { gql } = require("apollo-server-express");

module.exports = gql`
    type Query {
        getUser: User
        allUsers: [User]!
    }
    type User {
        id: ID!
        firstName: String
        lastName: String
        email: String
    }
    type WorkHistory {
        id: ID!
        startDate: DateTime
        endDate: DateTime
        title: String
        description: String
        company: String
    }
    type EducationHistory {
        id: ID!
        schoolType: SchoolType
        schoolName: String
        startDate: DateTime
        endDate: DateTime
        certName: String
    }
    enum SchoolType {
        HIGH_SCHOOL_OR_EQUIVALENT
        UNDERGRADUATE
        BOOTCAMP_OR_EQUIVALENT
        POST_SECONDARY
    }
    type Skills {
        id: ID!
        skillType: SkillType
    }
    enum SkillType {
        TECHNICAL
        QUALITATIVE
    }
    type Project {
        id: ID!
        title: String
        role: Role
        projectUrl: String
        description: String
    }

    # Role is the Job the user is applying for
    type Role {
        id: ID!
        name: String
        description: String
    }
    type DisplayQuestion {
        id: ID!
        text: String
        role: Role
    }
    type AnsweredQuestion {
        id: ID!
        questionText: String
        answerText: String
        user: User
    }
    type Hobby {
        id: ID!
        name: String
    }
    type Draft {
        id: ID!

        # To Be Continued...
    }
`;
