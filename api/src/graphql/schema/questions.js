const { gql } = require("apollo-server");

const questions = gql`
    type Query {
        getQuestions(roleId: ID!): [DisplayQuestion!]!
    }

    type Mutation {
        createQuestion(id: ID!): DisplayQuestion!
        updateQuestion(id: ID!): DisplayQuestion!
    }

    type DisplayQuestion {
        id: ID!
        roleId: ID!
        question: String!
        title: String!
    }

    type AnsweredQuestion {
        id: ID!
        questionText: DisplayQuestion!
        answerText: String!
        user: User
    }
`;

module.exports = questions;
