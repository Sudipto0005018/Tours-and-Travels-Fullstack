const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tourname: {
        type: String,
        required: true
    },
    person: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    startdate: {
        type: String,
        required: true
    },
    image: {
        type: String,
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

const orderModel = new mongoose.model('Order', orderSchema);
module.exports = orderModel;