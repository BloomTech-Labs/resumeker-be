require("dotenv").config();
const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const { options } = require("./api/src/config/auth");
// GraphQL Schema
const typeDefs = require("./api/src/schema/typeDefs");
const resolvers = require("./api/src/resolvers/resolvers");

/* eslint-disable */
const PORT = process.env.PORT;
const HOST = process.env.BASE_URL;
const baseURL = `http://${HOST}:${PORT}`;

const app = express();

const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: ({ req }) => {
        // simple auth check on every request
        const token = req.headers.authorization;
        const user = new Promise((resolve, reject) => {
            jwt.verify(token, options, (err, decoded) => {
                if (err) {
                    return reject(err);
                }
                resolve(decoded);
            });
        });

        return {
            user,
        };
    },
});

apollo.applyMiddleware({ app });

if (!module.parent) {
    app.listen(PORT, () => {
        console.log(
            `\n 🚀 Server listening on ${baseURL}${apollo.graphqlPath} 🚀 \n`
        );
    });
}
