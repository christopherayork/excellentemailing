const express = require('express');
const UsersController = require('../controllers/user');

// Router initialisation
const router = express.Router();

// CRUD
// Create (Users) POST
router.post('/createUser', UsersController.createUser);

// Read
router.get('/getUser/:id', UsersController.getUser);

// Update
router.patch('/updateUser/:id', UsersController.updateUser)

// Delete
router.delete('/deleteUser/:id', UsersController.deleteUser)




module.exports = router;