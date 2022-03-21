const mongoose = require('mongoose');

// this will define the database schema for data to be inserted and data to be retrieved
/**
const usersSchema = new mongoose.Schema({

    name: {
        required: true,
        type: String
    },

    age: {
        required: true,
        type: Number
    },

    password: {
        required: true,
        type: String
    }

});

*/


const tradeSchema: any = new mongoose.Schema( {

    time: {
        required: true,
        type: Date
    },

    instrument: {
        required: true,
        type: String
    },

    rate: {
        required: true,
        type: Number
    },

    type: {
        required: true,
        type: String
    },

    amount: {
        required: true,
        type: Number
    }

});


module.exports = mongoose.model('Trades', tradeSchema);
// module.exports = mongoose.model('Data', usersSchema);