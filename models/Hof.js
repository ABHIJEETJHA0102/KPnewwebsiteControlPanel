const mongoose = require('mongoose');

const HofSchema = new mongoose.Schema({ 
    Name: {
        type: String,
        required: [true, 'Required'],
    },
    description: {
        type: String,
        required: [true, 'Required'],
    },
    image: {
        type: [String]
    },
});

module.exports = mongoose.model('Hof', HofSchema);