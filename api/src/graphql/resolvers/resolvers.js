const fs = require("fs");

module.exports = {
    Query: {
        getUser: async (parent, _, context) => {
            const user = {
                firstName: context.user.given_name,
                lastName: context.user.family_name,
                email: context.user.email,
            };
            return user;
        },
        readError: (parent, _, context) => {
            fs.readFileSync("/does/not/exist");
        },
    },
};
