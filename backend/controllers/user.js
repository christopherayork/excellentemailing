const UserSchema = require('../models/user');

const createUser = (req, res) => {
    // let userData = req.body;
    // let newUser = new UserSchema(userData);
    // newUser.save(function(err) {
    //    if(err) res.status(400).json({ message: 'Unable to save post', error: true });
    //    else res.status(200).json({ message: 'User created' });
    // });

    
};

const getUser = (req, res) => {
    res.status(200).json({UserId: req.params.id})
    let userID = req.params.id;
    if(!userID) res.status(500).json({ message: 'You must supply a user ID as {id: value}' });
    UserSchema.find({ id: userID }).exec(function(err, user) {
        if(err) res.status(400).json({ message: 'User could not be found.', error: true });
        else res.status(200).json(user);
    });
};

const updateUser = async (req, res) => {
    res.status(200).json({ UserId: req.params.id })
    let userID = req.params.id;
    let changes = req.body;
    if(!userID) res.status(500).json({ message: 'You must supply a user ID as {id: value}' });
    try {
        await UserSchema.findOneAndUpdate({ id: userID }, changes);
        res.status(200).json({ message: 'User updated.' });
    } catch(err) {
        res.status(400).json({ message: 'Could not update user.', error: true });
    }
};

const deleteUser = async (req, res) => {
    res.status(200).json({ UserId: req.params.id })
    let userID = req.params.id;
    if(!userID) res.status(500).json({ message: 'You must supply a user ID as {id: value}' });
    try {
        await UserSchema.findOneAndDelete({ id: userID });
        res.status(200).json({ message: 'User deleted.' });
    } catch(err) {
        res.status(400).json({ message: 'Could not delete user.', error: true });
    }
};

module.exports = { createUser, getUser, updateUser, deleteUser };