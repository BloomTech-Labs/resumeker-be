const { gql } = require("apollo-server");

const hobby = gql`
    type Query {
        getHobbies(userID: ID!): [Hobby!]!
    }

    type Mutation {
        addHobby(): Hobby
        updateHobby: Hobby
    }

    type Hobby {
        id: ID!
        userID: ID!
        name: String
    }

    input HobbyInput {
        userID: ID!
        name: String
    }
`;

module.exports = hobby;
