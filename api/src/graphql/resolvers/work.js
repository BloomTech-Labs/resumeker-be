const db = require("../../database/config/dbConfig");

const tableName = "workHistory";
const DRAFTS = "drafts";

module.exports = {
    Query: {
        getWorkHistory: async (_, { workID }, { decoded, throwAuthError }) => {
            const [result] = await db(tableName).where({ id: workID });
            if (!result) throw new Error("No results matched the id.");

            const [draft] = await db(DRAFTS).where({ id: result.draftID });
            if (draft.userID !== decoded.sub) {
                throwAuthError();
            }

            return result;
        },
        getWorkByDraft: async (_, { draftID }, { decoded, throwAuthError }) => {
            // encountering SQL error where table is defined more than once on subsequent queries
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
        addWorkHistory: async (_, { input }, { decoded, throwAuthError }) => {
            const { draftID } = input;
            const draft = await db(DRAFTS).where({ id: draftID });

            if (!draft.userID === decoded.sub) {
                throwAuthError();
            }

            const [result] = await db(tableName).insert(input, ["*"]);
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
            const [result] = await db(tableName)
                .select(`${DRAFTS}.userID`)
                .join(DRAFTS, `${tableName}.draftID`, "=", `${DRAFTS}.id`)
                .where(`${tableName}.id`, workID);

            if (result.userID !== decoded.sub) {
                throwAuthError();
            }
            return db(tableName).where({ id: workID }).del();
        },
    },
};
