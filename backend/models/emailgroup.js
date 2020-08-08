const mongoose = require('mongoose');
const EmailSchema = require('./emails');

const EmailGroupSchema = new mongoose.Schema({
    tags: [String]
});

module.exports = mongoose.model('Email Group', EmailGroupSchema);