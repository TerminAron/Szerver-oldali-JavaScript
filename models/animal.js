const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Animal = db.model('Animal', {
    nev: String,
    faj: String,
    fajta: String,
    kor: Number,
    _fendfor: {
        type: Schema.Types.ObjectId,
        ref: 'AnimalHome'
    }
});

module.exports = Animal;