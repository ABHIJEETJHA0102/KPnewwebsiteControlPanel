const mongoose = require('mongoose');

const ICPC_schema = new mongoose.Schema({
    Team_name: {
        type: String,
        required: [true, 'Required'],
    },
    Rank: {
        type: String,
        required: [true, 'Required'],
    },
    description: {
        type: String
    },
    image: {
        type: [String]
    },
});

module.exports = mongoose.model('ICPC', ICPC_schema);