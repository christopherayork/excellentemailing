const express = require("express");
const UsersController = require("../controllers/user");

const Users = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/generateToken");

// Router initialisation
const router = express.Router();

// CRUD
// Create (Users) POST
router.post("/createUser", (req, res) => {
  let userData = req.body;
  if (
    !userData ||
    !userData.hasOwnProperty("password") ||
    !userData.hasOwnProperty("username") ||
    !userData.hasOwnProperty("email")
  ) {
    res.status(400).json({
      message: "You must provide a user with { username, email, password }.",
    });
    return;
  }

  // Hashes password before user is saved.
  const hash = bcrypt.hashSync(userData.password, 10);
  userData.password = hash;

  let newUser = new Users(userData);
  console.log("This is the new User", userData);

  // saving the user to the users collection
  newUser
    .save()
    .then((user) => {
      const token = generateToken(user);
      res.status(201).json({
        message: "User Created",
        token,
        user,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: `${err}` });
    });
});

// Get all users

// get list of all users (admin only)
router.get("/", (req, res) => {
  Users.find()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// Read
router.get("/getUser/:id", UsersController.getUser);

// Update
router.patch("/updateUser/:id", UsersController.updateUser);

// Delete
router.delete("/deleteUser/:id", UsersController.deleteUser);

//Login
router.post("/login", UsersController.loginUser);

module.exports = router;
