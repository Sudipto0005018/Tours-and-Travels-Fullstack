const mongoose = require('mongoose');

const adminschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tours: [{
        type: mongoose.Types.ObjectId,
        ref: 'Tour'
    }]
})

const adminmodel = new mongoose.model('Admin', adminschema);
module.exports = adminmodel;