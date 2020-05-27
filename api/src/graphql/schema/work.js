const { gql } = require("apollo-server");

const work = gql`
    type Query {
        getWorkHistory(id: ID!): WorkHistory
        getWorkByDraft(draftID: ID!): [WorkHistory]!
    }
    type Mutation {
        addWorkHistory(input: WorkHistoryInput): WorkHistory
        updateWorkHistory(id: ID!, input: WorkHistoryInput): WorkHistory
        deleteWorkHistory(id: ID!): Int!
    }

    type WorkHistory {
        id: ID!
        draftID: ID!
        startDate: String
        endDate: String
        title: String
        description: String
        company: String
    }

    input WorkHistoryInput {
        draftID: ID
        startDate: String
        endDate: String
        title: String
        description: String
        company: String
    }
`;

module.exports = work;
