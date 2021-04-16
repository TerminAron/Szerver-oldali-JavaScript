const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zzpmtx', { useNewUrlParser: true });

module.exports = mongoose;