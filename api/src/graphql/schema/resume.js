const { gql } = require("apollo-server");

const resume = gql`
    type Query {
        getQuestions(role: RoleInput): [DisplayQuestion!]!
        getWorkHistory: [WorkHistory]
        getEducationHistory: [EducationHistory]
        getProject: [Project]
    }

    type Mutation {
        createWorkHistory: WorkHistory
        # updateWorkHistory
        # createEducationHistory
        # updateEducationHistory
        # figure out mutations on skills
    }

    type WorkHistory {
        id: ID!
        startDate: String
        endDate: String
        title: String
        description: String
        company: String
    }

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

module.exports = resume;
