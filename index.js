require("dotenv").config();
const { ApolloServer, AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const { getUtilKey } = require("./api/src/auth/auth");

const typeDefs = require("./api/src/graphql/schema/index");
const resolvers = require("./api/src/graphql/resolvers/index.js");

const throwAuthError = () => {
    throw new AuthenticationError(
        "You must be authenticated or authorized to perform this operation."
    );
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: async ({ req }) => {
        if (!req.headers.authorization) {
            throwAuthError();
        }
        const token = req.headers.authorization || "";
        const bearerToken = token.match(/^Bearer\s+(.*)/)[1];

        const decodedToken = jwt.decode(bearerToken, { complete: true });
        const signingKey = await getUtilKey(decodedToken.header);

        const decoded = jwt.verify(bearerToken, signingKey, {
            audience: process.env.AUTHO0_AUDIENCE,
            issuer: process.env.AUTH0_DOMAIN,
            algorithms: ["RS256"],
        });

        return { decoded, throwAuthError };
    },
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
    /* eslint-disable no-console */
    console.log(`\n 🚀 Server listening on ${url} 🚀 \n`);
});
