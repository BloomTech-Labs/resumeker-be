module.exports = {
    Query: {
        getUser: async (parent, _, context) => {
            const user = {
                firstName: context.user.given_name,
                lastName: context.user.family_name,
                email: context.user.email,
            };
            return user;
        },
        helloWorld: async (parent, _, context) => {
            return "Hello World";
        },
    },
};
