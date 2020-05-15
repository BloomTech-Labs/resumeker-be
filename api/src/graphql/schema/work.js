const { gql } = require("apollo-server");

const work = gql`
    type Query {
        getWorkHistory: [WorkHistory]!
    }
    type Mutation {
        createWorkHistory(id: ID!): WorkHistory
        updateWorkHistory(id: ID!): WorkHistory
    }

    type WorkHistory {
        id: ID!
        startDate: String
        endDate: String
        title: String
        description: String
        company: String
    }
`;

module.exports = work;
