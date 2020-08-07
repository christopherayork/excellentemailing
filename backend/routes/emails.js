const express = require('express');
const EmailssController = require('../controllers/Emails');

// Router initialisation
const router = express.Router();

// CRUD
// Create (Emailss) POST
router.post('/createEmails', EmailssController.createEmails);

// Read
router.get('/getEmails/:id', EmailssController.getEmails);

// Update
router.patch('/updateEmails/:id', EmailssController.updateEmails)

// Delete
router.delete('/deleteEmails/:id', EmailssController.deleteEmails)




module.exports = router;