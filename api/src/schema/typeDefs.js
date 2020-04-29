const { gql } = require("apollo-server-express");

module.exports = gql`
    scalar DateTime
    type Query {
        getUser(id: ID!): User
        getAllUsers: [User!]!
        getQuestions(role: Role): [DisplayQuestion!]!
    }
    type Mutation {
        updateUser(
            id: ID!
            firstName: String
            lastName: String
            email: String
        ): User
        # createWorkHistory()
        # updateWorkHistory
        # createEducationHistory
        # updateEducationHistory
        # figure out mutations on skills
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

    type Skill {
        id: ID!
        text: String
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
        tips: [String]
        role: Role
    }
    type AnsweredQuestion {
        id: ID!
        questionText: DisplayQuestion!
        answerText: String!
        user: User
    }
    type Hobby {
        id: ID!
        name: String
    }
    type Draft {
        id: ID!
        user: User!
        role: Role
        project: [Project]
        wHistory: [WorkHistory]
        eHistory: [EducationHistory]
        skill: [Skill]
        hobbies: [Hobby]
    }
`;
