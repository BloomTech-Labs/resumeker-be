const { graphql } = require("graphql");

const {
    makeExecutableSchema,
    addMockFunctionsToSchema,
    mockServer,
} = require("graphql-tools");

const typeDefs = require("../graphql/schema/index");
const resolvers = require("../graphql/resolvers/education.js");

const testGetEducationQuery = {
    id: "test get education",
    variables: {},
    context: {},
    query: `
    query getEducationHistory {
        getEducationHistory(educationID: 7) {
            schoolName
        }
    }
    `,
    expected: {
        data: {
            getEducationHistory: {
                schoolName: "Hello World",
            },
        },
    },
};

// const getEducationHistoryByDraft = {
//     id: "test get education by draft",
//     variables: { draftID: 1000 },
//     context: {},
//     query: `
//     query getEducationByDraft(draftID: ID!) {
//         getEducationByDraft(draftID: $id) {
//             schoolName
//         }
//     }
//     `,
//     expected: {
//         data: {
//             getEducationHistoryByDraft: [
//                 {
//                     schoolName: "UCLA",
//                 },
//             ],
//         },
//     },
// };

describe("graphQL Education Schema and Resolvers", () => {
    const mockSchema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    const cases = [
        testGetEducationQuery,
        // getEducationHistoryByDraft,
    ];

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

    test("has valid typeDefs", async () => {
        expect(async () => {
            const MockServer = mockServer(mockSchema);
            await MockServer.query(`{__schema{types{name}}}`);
        }).not.toThrow();
    });

    test("Queries resolve to expected", () => {
        expect(async () => {
            await graphql(mockSchema, cases, null).resolves.toEqual(expected);
        });
    });

    cases.forEach((obj) => {
        const { id, variables, ctx, query, expected } = obj;
        test(`query: ${id}`, async () => {
            return await expect(
                graphql(mockSchema, query, null, { ctx }, variables)
            ).resolves.toEqual(expected);
        });
    });
});
