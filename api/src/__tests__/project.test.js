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

it("adding new project and getting it", async () => {
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
    const { query, mutate } = createTestClient(server);

    // adding new project
    const res_mutation = await mutate({
        mutation: gql `
            mutation addProject ($input: ProjectInput!) {
                addProject(input: $input){
                    id
                    draftID
                    title
                    projectUrl
                    description
                    startDate
                    endDate
                }
            }
            `,
            variables: {
                input: {
                    draftID: 1000,
                    title: "Resumeker",
                    projectUrl: "http://www.resumeker.com",
                    description: "This project can help you to create resume easily",
                    startDate: "02.01.2020",
                    endDate: "05.31.2020"
                }
            }
    })

    const res_query = await query({
        query: gql`
            query getProjectsByDraft ($draftID: ID!) {
                getProjectsByDraft(draftID: $draftID){
                    id
                    draftID
                    title
                    projectUrl
                    description
                    startDate
                    endDate
                }
            }
        `,
        variables: {draftID: 1000}
    })

    const toInt = Number(res_mutation.data.addProject.id)
    expect(res_query.data.getProjectsByDraft).toHaveLength(toInt)
});
