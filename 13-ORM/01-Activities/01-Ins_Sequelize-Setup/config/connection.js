const Sequelize = require('sequelize');

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  'library_db',
  // User
  'postgres',
  // Password
  'Lmsk09771!!',
  {
    // Database location
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
