const db = require("../../database/config/dbConfig");

const tableName = "languages";
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getLanguage: async (_, { languageID }, { decoded, throwAuthError }) => {
            const [result] = await db(tableName).where({ id: languageID });
            if (!result) throw new Error("No results matched the id.");

            const [draft] = await db(DRAFTS).where({ id: result.draftID });
            if (draft.userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
        getLanguagesByDraft: async (
            _,
            { draftID },
            { decoded, throwAuthError }
        ) => {
            // encountering SQL error where table is defined more than once on subsequent queries
            const [draft] = await db(DRAFTS).where({ id: draftID });
            if (draft.userID !== decoded.sub) {
                throwAuthError();
            }
            // dropping userID on the return
            return db(tableName)
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
        addLanguage: async (_, { input }, { decoded, throwAuthError }) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });
            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }
            const [result] = await db(tableName).insert(input, ["*"]);
            return result;
        },
        updateLanguage: async () => {
            throw new Error("Work in progress!");
        },
        deleteLanguage: async (
            _,
            { languageID },
            { decoded, throwAuthError }
        ) => {
            const [result] = await db("drafts")
                .select(`${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, languageID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }
            return db(tableName).where({ id: languageID }).del();
        },
    },
};
