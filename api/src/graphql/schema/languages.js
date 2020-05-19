const { gql } = require("apollo-server");

const languages = gql`
    type Query {
        getLanguages(userId: ID!): [Project!]!
    }

    type Mutation {
        createLanguage: Language
        updateLanguage: Language
    }

    type Language {
        id: ID!
        userId: ID!
        language: String!
    }
`;

module.exports = languages;
