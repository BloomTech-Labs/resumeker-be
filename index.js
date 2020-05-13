require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const { getUser } = require("./api/src/auth/m2mRouter");

/* eslint-disable */
const PORT = process.env.PORT;

// GraphQL Schema
const typeDefs = require("./api/src/graphql/schema/index");
const resolvers = require("./api/src/graphql/resolvers/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: async ({ req }) => {
        // const token = req.headers.authorization || "";
        // const user = "homie";
        // const user = await getUser(token);
        console.log(user, "\n---User in Context---");
        return { user };
    },
});

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Server listening on ${url}`);
});
