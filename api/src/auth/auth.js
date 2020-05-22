const jwksClient = require("jwks-rsa");
const { promisify } = require("util");

const client = jwksClient({
    jwksUri: `${process.env.AUTH0_DOMAIN}.well-known/jwks.json`,
});

const incomingKey = promisify(client.getSigningKey);

const getUtilKey = async (header) => {
    const result = await incomingKey(header.kid);

    return result.publicKey;
};

module.exports = {
    client,
    incomingKey,
    getUtilKey,
};
