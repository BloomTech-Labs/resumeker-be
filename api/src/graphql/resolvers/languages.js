const db = require("../../database/config/dbConfig");

const tableName = "languages";
const table = db(tableName);
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getLanguage: async (_, { languageID }, { decoded, throwAuthError }) => {
            const { userID, ...result } = await table
                .select(`${tableName}.*`, `${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, languageID)
                .first();

            if (userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
        getLanguagesByDraft: async (
            _,
            { draftID },
            { decoded, throwAuthError }
        ) => {
            const results = await table
                .select(`${tableName}.*`, `${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where({ draftID });

            if (results.length > 0 && results[0].userID !== decoded.sub) {
                throwAuthError();
            }

            // dropping userID in returned objects
            return results.map(({ userID, ...keepKeys }) => keepKeys);
        },
    },
    Mutation: {
        addLanguage: async (_, { input }, { decoded, throwAuthError }) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });

            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await table.insert(input, ["*"]);
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
            const [result] = await table
                .select(`${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, languageID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }
            return table.where({ id: languageID }).del();
        },
    },
};
