const EmailsSchema = require('../models/Emails');

const createEmails = (req, res) => {
    if(!req.body || !req.body.hasOwnProperty('email')) res.status(400).json({ message: 'You must supply an email in the format of { email }.', error: true });
    let Email = new EmailsSchema(req.body);
    Email.save(function(err) {
        if(err) res.status(400).json({ message: 'The email could not be saved.', error: true });
        else res.status(200).json({ message: 'The email was added successfully.' });
    });
};

const getEmails = (req, res) => {
    if(!req.params.id) res.status(400).json({ message: 'You must supply an id to the header for the email to retrieve.', error: true });
    EmailsSchema.findById(req.params.id).exec(function(err, emails) {
        if(err) res.status(400).json({ message: 'Could not retrieve email.', error: true });
        else res.status(200).json(emails);
    });
};

const getEmailsByUser = (req, res) => {
    if(!req.params.id) res.status(400).json({ message: 'You must supply a user id to the header for the email to retrieve.', error: true });
    EmailsSchema.find({ addedBy: req.params.id }).exec(function(err, emails) {
        if(err) res.status(400).json({ message: 'Could not retrieve emails.', error: true });
        else res.status(200).json(emails);
    });
};

const updateEmails = (req, res) => {
    res.status(200).json({ EmailsId: req.params.id })
    // we don't update the email
};

const deleteEmails = (req, res) => {
    res.status(200).json({ EmailsId: req.params.id })
    if(!req.params.id) res.status(400).json({ message: 'You must supply the id for the email you want to delete.', error: true });
    // do some verification here -- are they allowed to delete this?
    EmailsSchema.findOneAndDelete({ id: req.params.id }).exec(function(err) {
        if(err) res.status(400).json({ message: 'Email could not be deleted.', error: true });
        else res.status(200).json({ message: 'Email was successfully deleted.' });
    });
};

module.exports = { createEmails, getEmails, updateEmails, deleteEmails, getEmailsByUser };