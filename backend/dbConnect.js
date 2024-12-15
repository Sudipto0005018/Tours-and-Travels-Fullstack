const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process.env.MONGODB_CONNECT_URL;

const dbconnect = mongoose.connect( MONGODB_URL, (
    console.log('Database successfully connected')
));

module.exports = dbconnect;



