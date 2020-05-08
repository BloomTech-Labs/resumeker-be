const db = require("../database/config/dbConfig");
// const { getUser } = require("../middleware/m2mRouter");

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
        getWorkHistory: async (parent, { userId }, context) => {
            return db("workHistory").where({ userId });
        },
        getEducationHistory: async (parent, { userId }, context) => {
            return db("education").where({ userId });
        },
    },
};
