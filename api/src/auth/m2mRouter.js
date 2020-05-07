const axios = require("axios");
const { getToken, config } = require("./auth0Config");

const getSub = async (token) => {
    const options = {
        method: "get",
        url: `https://dev-cwmo2php.auth0.com/userinfo`,
        headers: { Authorization: `Bearer ${token}` },
    };

    const res = await axios(options);

    return res.data.sub;
};

const getUser = async (token) => {
    const options = {
        method: "GET",
        url: `https://dev-cwmo2php.auth0.com/userinfo`,
        headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
        },
        json: true,
        jar: "JAR",
    };

    const res = await axios(options);

    return res.data;
};

const updateUser = async (token, user_info) => {
    const userObject = {
        user_metadata: {
            user_info,
        },
    };
    const sub = await getSub(token);

    const m2mToken = await getToken();

    try {
        const updatedUser = await axios.patch(
            `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${sub}`,
            userObject,
            config(m2mToken)
        );

        return updatedUser.data;
    } catch (error) {
        return error;
    }
};

module.exports = { getUser, updateUser };
