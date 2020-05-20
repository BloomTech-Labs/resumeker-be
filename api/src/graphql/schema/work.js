const { gql } = require("apollo-server");

const work = gql`
    type Query {
        getWorkHistory: [WorkHistory]!
    }
    type Mutation {
        addWorkHistory(draftID: ID!, input: WorkHistoryInput): WorkHistory
        updateWorkHistory(id: ID!, input: WorkHistoryInput): WorkHistory
    }

    type WorkHistory {
        id: ID!
        startDate: String
        endDate: String
        title: String
        description: String
        company: String
    }

    input WorkHistoryInput {
        startDate: String
        endDate: String
        title: String
        description: String
        company: String
    }
`;

module.exports = work;
