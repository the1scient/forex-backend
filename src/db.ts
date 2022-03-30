// this will add the .env database configuration with host, user and password for postgresql
require('dotenv').config();
const Sequelize = require('sequelize');

// create a sequelize postgre connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'postgres',
    define:{
      timestamps: false,
      createdAt: false,
      updatedAt: false,
  }
 });
 
 
 // sequelize on connect event
 sequelize.authenticate().then(() => {
    console.log('[DATABASE] Successfully connected');
 });

 
 export { sequelize };
 module.exports = sequelize;
