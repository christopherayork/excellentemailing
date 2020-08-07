const express = require('express');
const tasksController = require('../controllers/tasks');

// Router initialisation
const router = express.Router();

// CRUD
// Create (tasks) POST
router.post('/createTask', tasksController.createTask);

// Read
router.get('/getTask/:id', tasksController.getTask);

// Update
router.patch('/updateTask/:id', tasksController.updateTask)

// Delete
router.delete('/deleteTask/:id', tasksController.deleteTask)




module.exports = router;