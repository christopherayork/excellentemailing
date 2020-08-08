const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: [String]
})

module.exports = mongoose.model("Emails", EmailSchema);