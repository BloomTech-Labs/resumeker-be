const { gql } = require("apollo-server");

const hobby = gql`
    type Query {
        getHobbies(userID: ID!): [Hobby!]!
    }

    type Mutation {
        addHobby(draftID: ID!, name: String): Hobby
        updateHobby: Hobby
    }

    type Hobby {
        id: ID!
        draftID: ID!
        name: String
    }
`;

module.exports = hobby;
