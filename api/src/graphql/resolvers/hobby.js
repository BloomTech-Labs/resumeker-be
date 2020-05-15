const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getHobby: (__, { userId }) => {
            return db("hobbies").where({ userId });
        },
    },
    Mutation: {
        createHobby: async (parent, { userId }, _) => {
            // function
        },
        updateHobby: async (parent, { userId }, _) => {
            // function
        },
    },
};
