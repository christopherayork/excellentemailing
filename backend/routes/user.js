const express = require("express");
const UsersController = require("../controllers/user");

// Router initialisation
const router = express.Router();

// CRUD
// Create (Users) POST
router.post("/createUser", UsersController.createUser);

// get list of all users (admin only)
router.get("/", UsersController.viewAllUsers);

// Read
router.get("/getUser/:id", UsersController.getUser);

// Update
router.patch("/updateUser/:id", UsersController.updateUser);

// Delete
router.delete("/deleteUser/:id", UsersController.deleteUser);

//Login
router.post("/login", UsersController.loginUser);

module.exports = router;
