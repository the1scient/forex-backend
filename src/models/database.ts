const mongoose = require('mongoose');

// this will define the database schema for data to be inserted and data to be retrieved

const dataSchema = new mongoose.Schema({

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

module.exports = mongoose.model('Data', dataSchema);