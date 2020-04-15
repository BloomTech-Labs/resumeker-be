const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const db = require('./database/config/dbConfig');

const typeDefs = require('./api/schema/typeDefs');

const resolvers = require('./resolvers/resolvers');

const PORT = process.env.PORT;


const apollo = new ApolloServer({ 
  typeDefs,
  resolvers,
});

const app = express();

apollo.applyMiddleware({ app });

app.listen(PORT, () => 
  console.log(`🚀 Server ready at localhost:${PORT}${apollo.graphqlPath}`)
  );