const { graphql } = require("graphql");

const {
    makeExecutableSchema,
    addMockFunctionsToSchema,
} = require("graphql-tools");

const typeDefs = require("../graphql/schema/education.js");
const resolvers = require("../graphql/resolvers/education.js");

const testGetEducationQuery = {
    id: "test get education",
    variables: { id: 352 },
    context: {},
    query: `
    query getEducationHistory($id: ID!){
        getEducationHistory(id: $id) {
            schoolName
        }
    }
    `,
    expected: {
        data: {
            getEducationHistory: null,
        },
    },
};

describe("graphQL Education Schema and Resolvers", () => {
    const mockSchema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    const cases = [testGetEducationQuery];

    addMockFunctionsToSchema({
        schema: mockSchema,
        mocks: {
            id: () => "7",
            userID: () => "1000",
            Array: () => [],
            String: () => "UCLA",
        },
        preserveResolvers: true,
    });

    cases.forEach((obj) => {
        const { id, variables, context, query, expected } = obj;
        test(`query: ${id}`, async () => {
            return await expect(
                graphql(mockSchema, query, null, { context }, variables)
            ).resolves.toEqual(expected);
        });
    });
});
