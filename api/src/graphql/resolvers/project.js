const db = require("../../database/config/dbConfig");

const tableName = "projects";
const table = db(tableName);
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getProject: async (_, { projectID }, { decoded, throwAuthError }) => {
            const { userID, ...result } = await table
                .select(`${tableName}.*`, `${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, projectID)
                .first();

            if (userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
        getProjectsByDraft: async (
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
        addProject: async (_, { input }, { decoded, throwAuthError }) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });

            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await table.insert(input, ["*"]);
            return result;
        },
        updateProject: async () => {
            throw new Error("Work in progress");
        },
        deleteProject: async (
            _,
            { projectID },
            { decoded, throwAuthError }
        ) => {
            const [result] = await table
                .select(`${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, projectID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }
            return table.where({ id: projectID }).del();
        },
    },
};
