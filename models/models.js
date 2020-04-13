const Sequelize = require('sequelize');


const sequelize = new Sequelize(
                        process.env.DB_NAME, 
                        process.env.DB_USERNAME, 
                        process.env.DB_PASSWORD, 
                        {
                            host: process.env.DB_HOST,
                            dialect: 'postgres',
                            dialectOptions: {
                                ssl: true 
                              },
                            
                        });

const models = {
    User: sequelize.import('./users.js'),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

module.exports = models;