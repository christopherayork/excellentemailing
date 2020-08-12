const EmailsSchema = require('../models/Emails');

const createEmails = (req, res) => {
    if(!req.body || !req.body.hasOwnProperty('email')) res.status(400).json({ message: 'You must supply an email in the format of { email }', error: true });
    let Email = new EmailsSchema(req.body);
    Email.save(function(err, obj) {
        if(err) res.status(400).json({ message: 'The email could not be saved.', error: true });
        else res.status(200).json({ message: 'The email was added successfully' });
    });
};

const getEmails = (req, res) => {
    res.status(200).json({ EmailsId: req.params.id })
};

const updateEmails = (req, res) => {
    res.status(200).json({ EmailsId: req.params.id })
};

const deleteEmails = (req, res) => {
    res.status(200).json({ EmailsId: req.params.id })
};

module.exports = { createEmails, getEmails, updateEmails, deleteEmails };