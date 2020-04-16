const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const auth = require('./middleware/auth');

const typeDefs = require('./api/schema/typeDefs');

const resolvers = require('./resolvers/resolvers');



const app = express();


app.use(auth);

const apollo = new ApolloServer({ 
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Get the user token from the headers.
    const token = req.headers.authorization || '';
    // try to retrieve a user with the token
   //  const user = getUser(token);
    // add the user to the context
   //  return { user };
   return { token };
   }

});


apollo.applyMiddleware({ app });

const PORT = process.env.PORT;

if(!module.parent) {
  app.listen(PORT, () => {
    console.log(`\n 🚀 Server listening on localhost:${PORT}${apollo.graphqlPath} 🚀 \n`)
  })
}
