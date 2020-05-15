const { gql } = require("apollo-server");

const work = gql`
    type Query {
        getWorkHistory: [WorkHistory]!
    }
    #type Mutation {
    # createWorkHistory: WorkHistory
    # updateWorkHistory
    #}

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
