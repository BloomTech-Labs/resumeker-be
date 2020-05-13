const { gql } = require("apollo-server");

const hobby = gql`
    type Hobby {
        id: ID!
        name: String
    }
`;

module.exports = hobby;
