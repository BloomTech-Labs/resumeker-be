const axios = require("axios");

// const request = require("request");

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
    // const sub = await getSub(token);

    // console.log(suby, "sub outside callback");

    // const m2mToken = await getToken();

    // console.log(m2m_token, "m2m_token");

    const options = {
        method: "GET",
        url: `https://dev-cwmo2php.auth0.com/userinfo`,
        headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
        },
        // json: true,
        // jar: "JAR",
    };

    const res = await axios(options);

    return res.data;
};

const updateUser = async (token, user_info) => {
    // console.log(user_info, "User_Info at M2M")

    const userObject = {
        user_metadata: {
            user_info,
        },
    };
    const sub = await getSub(token);

    const m2mToken = await getToken();

    // const options = {
    //     method: "PATCH",
    //     url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${sub}`,
    //     headers: {
    //         authorization: m2mToken,
    //         "content-type": "application/json",
    //     },
    //     body: userObject,
    //     json: true,
    //     jar: "JAR",
    // };

    try {
        const updatedUser = await axios.patch(
            `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${sub}`,
            userObject,
            config(m2mToken)
        );

        return updatedUser.data;
    } catch (error) {
        // console.log(error);

        return error;
    }
};

module.exports = { getUser, updateUser };
