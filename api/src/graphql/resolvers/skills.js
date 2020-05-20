const db = require("../../database/config/dbConfig");

const tableName = "skills";
const table = db(tableName);
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getSkill: async (_, { skillID }, { decoded, throwAuthError }) => {
            const { userID, ...result } = await table
                .select(`${tableName}.*`, `${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, skillID)
                .first();

            if (userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
        getSkillsByDraft: async (
            _,
            { draftID },
            { decoded, throwAuthError }
        ) => {
            const results = await table
                .select(`${tableName}.*`, `${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where({ draftID });

            console.log(results);

            if (results.length > 0 && results[0].userID !== decoded.sub) {
                throwAuthError();
            }

            // dropping userID in returned objects
            return results.map(({ userID, ...keepKeys }) => keepKeys);
        },
    },
    Mutation: {
        addSkill: async (_, { input }, { decoded, throwAuthError }) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });

            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await table.insert(input, ["*"]);
            return result;
        },
        updateSkill: () => {
            throw new Error("Work in progress!");
        },
        deleteSkill: async (_, { skillID }, { decoded, throwAuthError }) => {
            const [result] = await table
                .select(`${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, skillID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }

            return table.where({ id: skillID }).del();
        },
    },
};
