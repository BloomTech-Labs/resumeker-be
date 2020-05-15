const { gql } = require("apollo-server");

const hobby = gql`
    type Query {
        getHobby(userId: ID!): Hobby!
    }

    type Mutation {
        createHobby: Hobby
        updateHobby: Hobby
    }

    type Hobby {
        id: ID!
        userId: ID!
        name: String
    }
`;

module.exports = hobby;
