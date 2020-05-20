const db = require("../../database/config/dbConfig");

module.exports = {
    Query: {
        getHobbies: (__, { userID }) => {
            return db("hobbies").where({ userID });
        },
    },
    Mutation: {
        addHobby: async () => {
            // function
        },
        updateHobby: async () => {
            // function
        },
    },
};
