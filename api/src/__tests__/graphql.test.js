const { graphql } = require("graphql");

const {
    makeExecutableSchema,
    addMockFunctionsToSchema,

    mockServer,
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

const testGetEducationQuery = {
    id: "test get education",
    variables: { educationID: "1" },
    context: {},
    query: `
    query getEducationHistory {
        getEducationHistory(educationID: "1") {
            schoolName
        }
    }
    `,
    expected: {
        data: {
            getEducationHistory: [
                {
                    schoolName: "UCLA",
                },
            ],
        },
    },
};

const getEducationHistoryByDraft = {
    id: "test get education by draft",
    variables: { draftID: "1000" },
    context: {},
    query: `
    query getEducationHistory {
        getEducationHistory(draftID: "1000") {
            schoolName
        }
    }
    `,
    expected: {
        data: {
            getEducationHistory: [
                {
                    schoolName: "UCLA",
                },
            ],
        },
    },
};

describe("graphQL Schema and Resolvers", () => {
    const mockSchema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    const cases = [
        helloWorldQuery,
        testGetEducationQuery,
        getEducationHistoryByDraft,
    ];

    addMockFunctionsToSchema({
        schema: mockSchema,
        mocks: {
            id: () => "1",
            userID: () => "1000",
            Array: () => [],
            String: () => "Hello World",
        },
    });

    test("has valid typeDefs", async () => {
        expect(async () => {
            const MockServer = mockServer(typeDefs);
            await MockServer.query(`{__schema{types{name}}}`);
        }).not.toThrow();
    });

    test("Queries resolve to expected", () => {
        expect(async () => {
            await graphql(mockSchema, cases, null).resolves.toEqual(expected);
        });
    });
});
