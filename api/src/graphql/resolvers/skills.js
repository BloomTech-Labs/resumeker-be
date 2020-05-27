const db = require("../../database/config/dbConfig");

const tableName = "skills";
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getSkill: async (_, { skillID }, { decoded, throwAuthError }) => {
            const [result] = await db(tableName).where({ id: skillID });
            if (!result) throw new Error("No results matched the id.");

            const [draft] = await db(DRAFTS).where({ id: result.draftID });
            if (draft.userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
        getSkillsByDraft: async (
            _,
            { draftID },
            { decoded, throwAuthError }
        ) => {
            const draft = await db(DRAFTS).where({ id: draftID });
            if (draft.length > 0 && draft[0].userID !== decoded.sub) {
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
        addSkill: async (_, { input }, { decoded, throwAuthError }) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });

            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await db(tableName).insert(input, ["*"]);
            return result;
        },
        updateSkill: () => {
            throw new Error("Work in progress!");
        },
        deleteSkill: async (_, { skillID }, { decoded, throwAuthError }) => {
            const [result] = await db(tableName)
                .select(`${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, skillID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }

            return db(tableName).where({ id: skillID }).del();
        },
    },
};
