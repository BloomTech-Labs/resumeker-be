const db = require("../../database/config/dbConfig");

const tableName = "workHistory";
const table = db(tableName);
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getWorkHistory: async (_, { workID }, { decoded, throwAuthError }) => {
            const { userID, ...result } = await table
                .select(`${tableName}.*`, `${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, workID)
                .first();

            if (userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
        getWorkByDraft: async (_, { draftID }, { decoded, throwAuthError }) => {
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
        addWorkHistory: async (_, { input }, { decoded, throwAuthError }) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });

            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await table.insert(input, ["*"]);
            return result;
        },
        updateWorkHistory: async () => {
            // return db("workHistory")
            //     .where({ userId: args.userId })
            //     .update(args.data, ["id", "title"]);
        },
        deleteWorkHistory: async (
            _,
            { workID },
            { decoded, throwAuthError }
        ) => {
            const [result] = await table
                .select(`${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, workID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }
            return table.where({ id: workID }).del();
        },
    },
};
