const Schema = require('mongoose').Schema;
const db = require('../config/db');

const AnimalHome = db.model('AnimalHome', {
    name: String,
    pcode: Number,
    city: String,
    address: String,
    phone: String,
    email: String
});

module.exports = AnimalHome;