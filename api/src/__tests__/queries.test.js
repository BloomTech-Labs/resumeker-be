const {
    makeExecutableSchema,
    addMockFunctionsToSchema,
    addMocksToSchema,
    mockServer,
} = require("graphql-tools");
const { graphql } = require("graphql");
const typeDefs = require("../graphql/schema/index");

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs });

// Add mocks, modifies schema in place
addMocksToSchema({ schema });

const getEducationQuery = `
    query getEducationHistory {
        getEducationHistory(userId: "1") { 
            schoolName
        }
    }
`;

const testEducationQuery = {
    id: "test education",
    variables: { userId: "1" },
    context: {},
    query: getEducationQuery,
    expected: {
        data: {
            getEducationHistory: [
                {
                    schoolName: "A&M",
                },
            ],
        },
    },
};

describe("getQueries", () => {
    const mockSchema = makeExecutableSchema({
        typeDefs,
    });

    const cases = [testEducationQuery];

    addMockFunctionsToSchema({
        schema: mockSchema,
        mocks: {
            userId: () => "1",
            String: () => "A&M",
        },
    });

    test("has valid typeDefs", async () => {
        expect(async () => {
            const MockServer = mockServer(typeDefs);
            await MockServer.query(`{__schema{types{name}}}`);
        }).not.toThrow();
    });
});
