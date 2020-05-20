const db = require("../../database/config/dbConfig");

const hobbies = db("hobbies");
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getHobby: async (_, { hobbyID }, { decoded, throwAuthError }) => {
            const { userID, ...result } = await hobbies
                .select("hobbies.*", "drafts.userID")
                .join(DRAFTS, "hobbies.draftID", "=", `${DRAFTS}.id`)
                .where("hobbies.id", hobbyID);

            if (userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
        getHobbies: async (_, { draftID }, { throwAuthError, decoded }) => {
            const results = await hobbies
                .select("hobbies.*", "drafts.userID")
                .join(DRAFTS, "hobbies.draftID", "=", `${DRAFTS}.id`)
                .where({ draftID });

            if (results.length > 0 && results[0].userID !== decoded.sub) {
                throwAuthError();
            }

            // dropping userID in returned objects
            return results.map(({ userID, ...keepKeys }) => keepKeys);
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
        deleteHobby: async (_, { hobbyID }, { decoded, throwAuthError }) => {
            const [result] = await hobbies
                .select("drafts.userID")
                .join(DRAFTS, "education.draftID", "=", `${DRAFTS}.id`)
                .where("education.id", hobbyID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }
            return hobbies.where({ id: hobbyID }).del();
        },
    },
};
