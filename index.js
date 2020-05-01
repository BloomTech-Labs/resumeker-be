require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const jwt = require("jsonwebtoken");
const { options } = require("./api/src/config/auth");

/* eslint-disable */
const PORT = process.env.PORT;
const HOST = process.env.BASE_URL;
const baseURL = `http://${HOST}:${PORT}`;

// GraphQL Schema
const typeDefs = require("./api/src/schema/typeDefs");
const resolvers = require("./api/src/resolvers/resolvers");

const server = new ApolloServer({
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

// if (!module.parent) {
server.listen({ port: PORT }).then(({ url }) => {
    console.log(`\n 🚀 Server listening on ${url} 🚀 \n`);
});
// }
