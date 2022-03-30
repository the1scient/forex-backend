const Sequelize = require('sequelize');
const database = require('../db.ts');

const Trades = database.define('trades', {
    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    instrument: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rate: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    
    
 }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    id: false
 } );



module.exports = Trades;