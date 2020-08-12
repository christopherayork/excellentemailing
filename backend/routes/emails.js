const express = require("express");
const EmailsController = require("../controllers/Emails");

// Router initialisation
const router = express.Router();

// CRUD

// Grab all

router.get("/getAll", EmailsController.getAllEmails);

// Create (Emails) POST
router.post("/createEmails", EmailsController.createEmails);

// Read
router.get("/getEmails/:id", EmailsController.getEmails);
router.get("/getEmailsUser/:id", EmailsController.getEmailsByUser);

// Update
router.patch("/updateEmails/:id", EmailsController.updateEmails);

// Delete
router.delete("/deleteEmails/:id", EmailsController.deleteEmails);

module.exports = router;
