const { gql } = require("apollo-server");

const questions = gql`
    type Query {
        getQuestions(role: RoleInput): [DisplayQuestion!]!
    }

    #type Mutation {
    # figure out mutations on display questions
    #}

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
`;

module.exports = questions;
