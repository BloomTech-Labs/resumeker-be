const { graphql } = require("graphql");

const {
    makeExecutableSchema,
    addMockFunctionsToSchema,
} = require("graphql-tools");

const typeDefs = require("../graphql/schema/index");
const resolvers = require("../graphql/resolvers/index");

const helloWorldQuery = {
    id: "hello world",
    variables: {},
    context: {},
    query: `
    query helloWorldQuery {
        helloWorld
    }
    `,
    expected: {
        data: {
            helloWorld: "Hello World",
        },
    },
};

describe("graphQL Hello World Schema and Resolvers", () => {
    const mockSchema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    addMockFunctionsToSchema({
        schema: mockSchema,
        mocks: {
            id: () => "1",
            userID: () => "1000",
            Array: () => [],
            String: () => "UCLA",
        },
        preserveResolvers: true,
    });

    test("Queries resolve to expected", () => {
        expect(async () => {
            await graphql(mockSchema, helloWorldQuery, null).resolves.toEqual(
                helloWorldQuery.expected
            );
        });
    });
});
