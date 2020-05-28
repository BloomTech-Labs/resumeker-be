const { ApolloServer, gql, AuthenticationError } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing");

const resolvers = require("../graphql/resolvers/education");
const typeDefs = require("../graphql/schema/education");

const throwAuthError = () => {
    throw new AuthenticationError(
        "You must be authenticated or authorized to perform this operation."
    );
};

it("adding a new education and retrieving it", async () => {
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

    // run query against the server and snapshot the output
    const res_mutation = await mutate({
        mutation: gql`
            mutation addEducationTest {
                addEducationHistory(input: {
                    draftID: 1000,
                    schoolType: COURSE,
                    schoolName: "Lambda",
                    startDate:"06.19.1990",
                    endDate: "06.03.2020",
                    certName: "A1 Degree",
                    courses:"full stack web dev"
                }) {
                    id
                    draftID
                    schoolType
                    schoolName
                    startDate
                    endDate
                    certName
                    courses
                }
            }
        `,
       
    });

    const res_query = await query({
        query: gql`
            query getEducationByDraft ($draftID: ID!) {
                getEducationByDraft(draftID: $draftID){
                    id
                    draftID
                    schoolType
                    schoolName
                    startDate
                    endDate
                    certName
                    courses
                }
            }
        `,
        variables: {draftID: 1000}
    })
    console.log(res_mutation)

    const result = res_query.data.getEducationByDraft
    const lastObject = result[result.length-1]

    expect(res_mutation.data.addEducationHistory.id).toEqual(lastObject.id)
});