const { gql } = require("apollo-server");

const hobby = gql`
    type Query {
        getHobby(hobbyID: ID!): Hobby
        getHobbiesByDraft(draftID: ID!): [Hobby]!
    }

    type Mutation {
        addHobby(input: HobbyInput): Hobby
        updateHobby(hobbyID: ID!, input: HobbyInput): Hobby
        deleteHobby(hobbyID: ID!): Int!
    }

    type Hobby {
        id: ID!
        draftID: ID!
        name: String
    }

    input HobbyInput {
        draftID: ID!
        name: String
    }
`;

module.exports = hobby;
