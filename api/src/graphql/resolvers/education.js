const db = require("../../database/config/dbConfig");

const tableName = "education";
const table = db(tableName);
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getEducationHistory: async (
            _,
            { educationID },
            { decoded, throwAuthError }
        ) => {
            const [result] = await table.where({ id: educationID });
            if (!result) throw new Error("No results matched the id.");

            const [draft] = await db(DRAFTS).where({ id: result.draftID });
            if (draft.userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
        getEducationByDraft: async (
            __,
            { draftID },
            { decoded, throwAuthError }
        ) => {
            // encountering SQL error where table is defined more than once on subsequent queries
            const draft = await db(DRAFTS).where({ id: draftID });
            if (draft.length > 0 && draft[0].userID !== decoded.sub) {
                throwAuthError();
            }
            // dropping userID on the return
            return table
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
        addEducationHistory: async (
            _,
            { input },
            { decoded, throwAuthError }
        ) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });

            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await table.insert(input, ["*"]);
            return result;
        },
        updateEducationHistory: () => {},
        deleteEducation: async (
            _,
            { educationID },
            { decoded, throwAuthError }
        ) => {
            const [result] = await table
                .select(`${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, educationID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }
            return table.where({ id: educationID }).del();
        },
    },
};
