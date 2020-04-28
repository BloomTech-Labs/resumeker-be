const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const auth = require("./middleware/auth");
const typeDefs = require("./api/schema/typeDefs");
const resolvers = require("./resolvers/resolvers");
const { getToken } = require("./config/auth0Config");

const app = express();

// app.use(auth);

const apollo = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
	context: ({ req }) => {
		// Get the user token from the headers.
		const token = req.headers.authorization || "";

		return { token };
	},
});

apollo.applyMiddleware({ app });

const PORT = process.env.PORT;

if (!module.parent) {
	app.listen(PORT, async () => {
		console.log(
			`\n 🚀 Server listening on localhost:${PORT}${apollo.graphqlPath} 🚀 \n`
		);
	});
}
