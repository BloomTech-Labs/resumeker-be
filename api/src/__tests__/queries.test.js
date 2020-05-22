const { graphql } = require("graphql");

const {
    makeExecutableSchema,
    addMockFunctionsToSchema,

    mockServer,
} = require("graphql-tools");

const typeDefs = require("../graphql/schema/index");

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
    variables: { draftID: "1" },
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

describe("getQueries", () => {
    const mockSchema = makeExecutableSchema({
        typeDefs,
    });

    // const cases = [helloWorldQuery, testGetEducationQuery, getEducationHistoryByDraft];

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

    test("hello World Query valid", () => {
        expect(async () => {
            await graphql(mockSchema, helloWorldQuery).resolves.toEqual(
                helloWorldQuery.expected
            );
        });
    });
});
