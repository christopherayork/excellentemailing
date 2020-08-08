const mongoose = require('mongoose');
const EmailSchema = require('./emails');

const EmailGroupSchema = new mongoose.Schema({
    emails: [EmailSchema]
});