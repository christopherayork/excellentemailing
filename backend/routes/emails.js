const express = require("express");
const EmailsController = require("../controllers/Emails");
const Auth = require('../middleware/authenticate-middleware');

// Router initialisation
const router = express.Router();

// CRUD

// Grab all

router.get("/getAll", EmailsController.getAllEmails);

// Create (Emails) POST
router.post("/createEmails", Auth, EmailsController.createEmails);

// Read
router.get("/getEmails/:id", EmailsController.getEmails);
router.get("/getEmailsUser/:id", EmailsController.getEmailsByUser);

// Update
router.patch("/updateEmails/:id", Auth, EmailsController.updateEmails);

// Delete
router.delete("/deleteEmails/:id", Auth, EmailsController.deleteEmails);

module.exports = router;
