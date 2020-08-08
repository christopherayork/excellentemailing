const EmailsSchema = require('../models/Emails');

const createEmails = (req, res) => {
    res.status(200).json({ message: 'Emails Created' });

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