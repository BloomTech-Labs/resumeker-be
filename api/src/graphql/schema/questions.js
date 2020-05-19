const { gql } = require("apollo-server");

const questions = gql`
    type Query {
        getQuestions(roleId: ID!): [DisplayQuestion!]!
    }

    type Mutation {
        addQuestion(id: ID!): DisplayQuestion!
        updateQuestion(id: ID!): DisplayQuestion!
    }

    type DisplayQuestion {
        id: ID!
        roleId: ID!
        question: String!
        tip: String!
    }

    type AnsweredQuestion {
        id: ID!
        questionText: DisplayQuestion!
        answerText: String!
        user: User
    }
`;

module.exports = questions;
