const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getHobbies: (__, { userID }) => {
            return db("hobbies").where({ userID });
        },
    },
    Mutation: {
        addHobby: async (parent, { userID }, _) => {
            // function
        },
        updateHobby: async (parent, { userID }, _) => {
            // function
        },
    },
};
