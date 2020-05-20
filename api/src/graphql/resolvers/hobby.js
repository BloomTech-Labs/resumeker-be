const knex = require("knex");
const db = require("../../database/config/dbConfig");

const hobbies = db("hobbies");
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getHobbies: async (__, { draftID }, { throwAuthError, decoded }) => {
            // join hobby and drafts table
            // take only the draft matches the ID

            const result = await hobbies
                .select("hobbies.*", "drafts.userID")
                .join(DRAFTS, "hobbies.draftID", "=", `${DRAFTS}.id`)
                .where({ draftID });
            // check the userID on the draft that was joined
            console.log("=======================\n", result);
            if (result.length > 0 && result[0].userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
    },
    Mutation: {
        addHobby: async (
            _,
            { name, draftID: id },
            { decoded, throwAuthError }
        ) => {
            const draft = await db(DRAFTS).where({ id });
            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await hobbies.insert({ name, draftID: id }, ["*"]);
            return result;
        },
        updateHobby: async () => {
            // function
        },
    },
};
