require('dotenv').config()

const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const authenticate = require('./middleware/authMiddleware.js');

const models = require('./models/models');

const typeDefs = require('./src/schema/schema');

const resolvers = require('./src/resolvers/resolvers');


const apollo = new ApolloServer({ 
  typeDefs,
  resolvers,
  context:{
    models
  }
});


const app = express();

//Drop Middleware here
app.use('/auth', authenticate());

apollo.applyMiddleware({
  app

});


//{force:true} taken out of sync()

models.sequelize.sync().then(() => {
app.listen(process.env.PORT, () => 
  console.log(`🚀 Server ready at 4000${apollo.graphqlPath}`)
  );
 })


// models.sequelize.sync( {force:true}).then(() => {
//   server.listen().then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
//   });
// });