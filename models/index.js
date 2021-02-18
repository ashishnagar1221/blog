
const Sequelize = require('sequelize');
const config = require('../config/db.config');

const sequelize = new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,
    port : config.port,
    dialect: config.dialect,
    pool: {
        max:config.pool.max,
        min:config.pool.min,
        acquire:config.pool.acquire,
        idle:config.pool.idle
    }
});

const db = {};
db.sequelize = sequelize;

db.user = require('./user/use.model')(sequelize,Sequelize)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;