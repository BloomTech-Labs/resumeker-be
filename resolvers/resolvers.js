const db = require("../database/config/dbConfig");
const { getUser, updateUser} = require("../middleware/m2mRouter");

module.exports =  {
    Query: {
    getUser: async (parent, _, context) => {
                
            const user = await getUser(context.token);

            console.log(user, "getUser User");

            return {userInfo: JSON.stringify(user)};
        },
    getUpdatedUser: async (parent, _, context) => {
            
            const updated_user = await updateUser(context.user_info);

            console.log(updated_user, "updated user");

            return {userInfo: JSON.stringify(updated_user)};
        },    
    allUsers: (parent, args, _) => {
            
            return db("users");
        },
    getToken: (parent,args, context) => {

            return context
            
        },
    getString: (_, { bla }) => {
            return {message: `Hello ${bla}`};
        }
    },
    Mutation: {
        createUser: (parent, {data}, _) => {
            return db("users").insert({data})
        },
        getUpdatedUser: async (_, args, context ) => {
            console.log(args, "getUpdatedUser Body")

            const updatedUser = await updateUser(context.token, args)

            console.log(updatedUser, 'Updated User Holy Grail =====')

            return updatedUser;
        }
    }
};