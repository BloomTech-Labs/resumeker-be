require("dotenv").config();
const { ApolloServer, AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

// GraphQL Schema
const typeDefs = require("./api/src/graphql/schema/index");
const resolvers = require("./api/src/graphql/resolvers/resolvers");

const client = jwksClient({
    jwksUri: `${process.env.AUTH0_DOMAIN}.well-known/jwks.json`,
});

const getKey = (header, cb) => {
    client.getSigningKey(header.kid, (err, key) => {
        if (err) {
            cb(err);
        } else {
            const signingKey = key.publicKey || key.rsaPublicKey;
            cb(null, signingKey);
        }
    });
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: async ({ req }) => {
        if (!req.headers.authorization) {
            throw new AuthenticationError(
                "You must include a token in the authorzation."
            );
        }
        const token = req.headers.authorization || "";
        const bearerToken = token.match(/^Bearer\s+(.*)/)[1];

        jwt.verify(
            bearerToken,
            getKey,
            {
                audience: process.env.AUTHO0_AUDIENCE,
                issuer: process.env.AUTH0_DOMAIN,
                algorithms: ["RS256"],
            },
            (error, decoded) => {
                if (error) {
                    throw new AuthenticationError(error);
                }
                return { user: decoded.sub };
            }
        );
    },
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`\n 🚀 Server listening on ${url} 🚀 \n`);
});
