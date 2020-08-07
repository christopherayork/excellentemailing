const UserSchema = require('../models/user');

const createUser = (req, res) => {
    let userData = req.body;
    let newUser = new UserSchema(userData);
    newUser.save(function(err) {
       if(err) res.status(400).json({ message: 'Unable to save post', error: true });
       else res.status(200).json({ message: 'User created' });
    });
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