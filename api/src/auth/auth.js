const jwt = require("jsonwebtoken");
const jwksRsa = require("jwks-rsa");

const authConfig = {
    domain: "dev-cwmo2php.auth0.com",
    audience: "https://graphql-api",
};

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
    }),
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"],
});

module.exports = checkJwt;
