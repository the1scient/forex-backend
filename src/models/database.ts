const mongoose = require('mongoose');



const tradeSchema = new mongoose.Schema( {

    // defining the database schema (the fields)

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
