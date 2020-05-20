const db = require("../../database/config/dbConfig");

const DRAFTS = "drafts";
const languages = db("languages");

module.exports = {
    Query: {
        getLanguages: async (__, { draftID }, { throwAuthError, decoded }) => {
            const result = await languages
                .select("languages.*", "drafts.userID")
                .join(DRAFTS, "languages.draftID", "=", `${DRAFTS}.id`)
                .where({ draftID });
            if (result.length > 0 && result[0].userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
    },
    Mutation: {
        addLanguage: async (
            _,
            { language, draftID: id },
            { decoded, throwAuthError }
        ) => {
            const draft = await db(DRAFTS).where({ id });
            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await languages.insert({ language, draftID: id }, [
                "*",
            ]);
            return result;
        },
        updateLanguage: async () => {
            throw new Error("Work in progress!");
        },
    },
};
