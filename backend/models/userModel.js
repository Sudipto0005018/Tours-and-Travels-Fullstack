const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    name: {
        type: String,
        req: true
    },
    email: {
        type: String,
        req: true
    },
    password: {
        type: String,
        req: true
    },
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: 'Order'
    }],
    cartitems: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cart'
    }]
})

const usermodel = new mongoose.model('User', userschema);
module.exports = usermodel;
