// const db = require("../../database/config/dbConfig");

// module.exports = {
//     Query: {
//         getUser: async (parent, _, context) => {
//             const user = {
//                 firstName: context.user.given_name,
//                 lastName: context.user.family_name,
//                 email: context.user.email,
//             };
//             return user;
//         },
//         helloWorld: async (parent, _, context) => {
//             return "Hello World";
//         },
//     },
//     Mutation: {
//         addUser: async (parent, _, context) => {
//             const [{ id }] = await db("users").insert(
//                 { id: context.decoded.sub },
//                 ["id"]
//             );
//             return { id };
//         },
//         updateUser: async (parent, args) => {
//             return db("users")
//                 .where({ id: args.id })
//                 .update(args.data, ["id", "title"]);
//         },
//     },
// };
