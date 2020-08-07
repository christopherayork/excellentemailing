const UserSchema = require('../models/user');

const createUser = (req, res) => {
    res.status(200).json({message: 'User Created'})
};

const getUser = (req, res) => {
    res.status(200).json({UserId: req.params.id})
};

const updateUser = (req, res) => {
    res.status(200).json({ UserId: req.params.id })
};

const deleteUser = (req, res) => {
    res.status(200).json({ UserId: req.params.id })
};

module.exports = { createUser, getUser, updateUser, deleteUser };