const db = require("../../database/config/dbConfig");

const hobbies = db("hobbies");
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getHobbies: async (__, { draftID }, { throwAuthError, decoded }) => {
            const result = await hobbies
                .select("hobbies.*", "drafts.userID")
                .join(DRAFTS, "hobbies.draftID", "=", `${DRAFTS}.id`)
                .where({ draftID });
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
            throw Error("Work in progress!");
        },
    },
};
