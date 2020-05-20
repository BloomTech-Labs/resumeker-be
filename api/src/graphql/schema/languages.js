const { gql } = require("apollo-server");

const languages = gql`
    type Query {
        getLanguages(draftID: ID!): [Language]!
    }

    type Mutation {
        addLanguage(draftID: ID!, language: String): Language
        updateLanguage(draftID: ID!, language: String): Language
    }

    type Language {
        id: ID!
        draftID: ID!
        language: String!
    }
`;

module.exports = languages;
