const { gql } = require("apollo-server");

const hobby = gql`
    type Query {
        getHobbies(userId: ID!): [Hobby!]!
    }

    type Mutation {
        addHobby: Hobby
        updateHobby: Hobby
    }

    type Hobby {
        id: ID!
        userId: ID!
        name: String
    }

    input HobbyInput {
        userId: ID!
        name: String
    }
`;

module.exports = hobby;
