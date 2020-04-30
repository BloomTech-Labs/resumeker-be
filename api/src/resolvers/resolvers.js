module.exports = {
    Query: {
        getUser: async (_, __, ctx) => {
            if (!ctx.user) {
                return null;
            }
            return ctx.user;
        },
        /* eslint-disable*/
        helloWorld: async (parent, args, context) => {
            return "Hello World";
        },
    },
};
