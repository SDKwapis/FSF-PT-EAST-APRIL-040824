const Sequelize = require('sequelize');

const sequelize = new Sequelize(
process.env.DB_USERNAME,
process.env.DB_PASSWORD,
process.env.DB_USER
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
