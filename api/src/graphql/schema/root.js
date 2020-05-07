const { gql } = require("apollo-server");

const root = gql`
    type Query {
        helloWorld: String
    }
`;

module.exports = root;
