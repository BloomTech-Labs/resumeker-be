const typeDefs = require("../graphql/schema/index");
const resolvers = require("../graphql/resolvers/index");
const { makeExecutableSchema, mockServer } = require("graphql-tools");

describe("Graphql Schema", () => {
    const mockSchema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    test("has valid typeDefs", async () => {
        expect(async () => {
            const MockServer = mockServer(mockSchema);
            await MockServer.query(`{__schema{types{name}}}`);
        }).not.toThrow();
    });
});
