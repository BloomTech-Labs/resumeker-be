const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// GraphQL Schema
const typeDefs = require("./api/src/schema/typeDefs");
const resolvers = require("./api/src/resolvers/resolvers");

const port = 8000;
const PORT = process.env.PORT || port;
const HOST = process.env.BASE_URL || "localhost";
const baseURL = `http://${HOST}:${PORT}`;

// Are these necessary?
// const auth = require("./api/src/middleware/auth");
// const { getToken } = require("./api/src/middleware/auth");

const app = express();

// app.use(auth);

const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: ({ req }) => {
        // Get the user token from the headers.
        const token = req.headers.authorization || "";

        return { token };
    },
});

apollo.applyMiddleware({ app });

if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`\n 🚀 Server listening on ${baseURL} 🚀 \n`);
    });
}
