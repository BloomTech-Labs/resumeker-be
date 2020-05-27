const db = require("../../database/config/dbConfig");

const tableName = "hobbies";
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getHobby: async (_, { hobbyID }, { decoded, throwAuthError }) => {
            const [result] = await db(tableName).where({ id: hobbyID });
            if (!result) throw new Error("No results matched the id.");

            const [draft] = await db(DRAFTS).where({ id: result.draftID });
            if (draft.userID !== decoded.sub) {
                throwAuthError();
            }
            return result;
        },
        getHobbiesByDraft: async (
            _,
            { draftID },
            { throwAuthError, decoded }
        ) => {
            // encountering SQL error where table is defined more than once on subsequent queries
            const [draft] = await db(DRAFTS).where({ id: draftID });
            if (draft.userID !== decoded.sub) {
                throwAuthError();
            }
            // dropping userID on the return
            return db("education")
                .where({ draftID })
                .then((results) =>
                    /* eslint-disable no-unused-vars */
                    results.map(({ userID, ...keepKeys }) => keepKeys)
                )
                .catch((err) => {
                    /* eslint-disable no-console */
                    console.log(err);
                    throw new Error(
                        "Something went wrong, check server console for info."
                    );
                });
        },
    },
    Mutation: {
        addHobby: async (_, { input }, { decoded, throwAuthError }) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });
            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }
            const [result] = await db(tableName).insert(input, ["*"]);
            return result;
        },
        updateHobby: async () => {
            throw Error("Work in progress!");
        },
        deleteHobby: async (_, { hobbyID }, { decoded, throwAuthError }) => {
            const [result] = await db(tableName)
                .select(`${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, hobbyID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }
            return db(tableName).where({ id: hobbyID }).del();
        },
    },
};
