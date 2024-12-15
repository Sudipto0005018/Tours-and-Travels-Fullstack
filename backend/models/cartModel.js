const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    startdate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    person: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    tour: {
        type: mongoose.Types.ObjectId,
        ref: 'Tour'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const cartmodel = new mongoose.model('Cart', cartSchema);
module.exports = cartmodel;