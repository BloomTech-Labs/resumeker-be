const { gql } = require("apollo-server");

const languages = gql`
    type Query {
        getLanguages(draftID: ID!): [Language]!
    }

    type Mutation {
        addLanguage(input: LanguageInput): Language
        updateLanguage(languageID: ID!, input: LanguageInput): Language
    }

    type Language {
        id: ID!
        draftID: ID!
        language: String!
    }

    input LanguageInput {
        draftID: ID
        language: String
    }
`;

module.exports = languages;
