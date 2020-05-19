const { gql } = require("apollo-server");

const languages = gql`
    type Query {
        getLanguages(userID: ID!): [Project!]!
    }

    type Mutation {
        addLanguage: Language
        updateLanguage: Language
    }

    type Language {
        id: ID!
        userID: ID!
        language: String!
    }
`;

module.exports = languages;
