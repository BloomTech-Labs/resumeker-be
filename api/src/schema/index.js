const { gql } = require("apollo-server");

module.exports = gql`
    type Query {
        getUser(id: ID!): User
        getAllUsers: [User!]!
        getQuestions(role: RoleInput): [DisplayQuestion!]!
        getWorkHistory(userId: String!): [WorkHistory]!
        getEducationHistory(userId: String!): [EducationHistory]!
        helloWorld: String
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
        startDate: String
        endDate: String
        title: String
        description: String
        company: String
        userId: String
    }

    type EducationHistory {
        id: ID!
        schoolType: SchoolType
        schoolName: String
        startDate: String
        endDate: String
        certName: String
        userId: String
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

    input RoleInput {
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
        work: [WorkHistory]
        education: [EducationHistory]
        skill: [Skill]
        hobbies: [Hobby]
    }
`;
