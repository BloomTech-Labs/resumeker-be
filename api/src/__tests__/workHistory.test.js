const { ApolloServer, gql, AuthenticationError } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing");

const resolvers = require("../graphql/resolvers/index");
const typeDefs = require("../graphql/schema/index");

require("dotenv").config();

const throwAuthError = () => {
    throw new AuthenticationError(
        "You must be authenticated or authorized to perform this operation."
    );
};

it("testClient query", async () => {
    // create a test server to test against, using our production typeDefs,
    // resolvers, and dataSources.
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({
            decoded: { sub: process.env.TEST_USER },
            throwAuthError,
        }),
    });

    // use the test server to create a query function
    const { query } = createTestClient(server);

    // run query against the server and snapshot the output
    const res = await query({
        query: gql`
            query getWorkByDraftTest {
                getWorkByDraft(draftID: 1000) {
                    title
                }
            }
        `,
    });
    console.log(res, "response inside of hobby test");
    expect(res.data.getWorkByDraft).toHaveLength(1);
});
