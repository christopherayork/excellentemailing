const Users = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/generateToken");

const createUser = (req, res) => {
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

  newUser
    .save()
    .then((user) => {
      const token = generateToken(obj);
      res.status(200).json({ message: "User created", data: obj, token });
    })
    .catch((err) => {
      res.status(400).json({ message: "Unable to save post", error: true });
    });
};

const getUser = (req, res) => {
  res.status(200).json({ UserId: req.params.id });
  let userID = req.params.id;
  if (!userID)
    res
      .status(500)
      .json({ message: "You must supply a user ID as {id: value}" });
  Users.find({ id: userID }).exec(function (err, user) {
    if (err)
      res
        .status(400)
        .json({ message: "User could not be found.", error: true });
    else res.status(200).json(user);
  });
};

const updateUser = async (req, res) => {
  res.status(200).json({ UserId: req.params.id });
  let userID = req.params.id;
  let changes = req.body;
  if (!userID)
    res
      .status(500)
      .json({ message: "You must supply a user ID as {id: value}" });
  try {
    await Users.findOneAndUpdate({ id: userID }, changes);
    res.status(200).json({ message: "User updated." });
  } catch (err) {
    res.status(400).json({ message: "Could not update user.", error: true });
  }
};

const deleteUser = async (req, res) => {
  res.status(200).json({ UserId: req.params.id });
  let userID = req.params.id;
  if (!userID)
    res
      .status(500)
      .json({ message: "You must supply a user ID as {id: value}" });
  try {
    await Users.findOneAndDelete({ id: userID });
    res.status(200).json({ message: "User deleted." });
  } catch (err) {
    res.status(400).json({ message: "Could not delete user.", error: true });
  }
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  console.log("Username:", { username: username });
  Users.findOne({ username: username })
    .then((user) => {
      //If the password matches after going through the hash continue
      if (user && bcrypt.compareSync(password, user.password)) {
        // Create a token
        const token = generateToken(user);
        res.status(200).json({ message: "Welcome", token });
      } else {
        error("Wrong Information", 401, res);
      }
    })
    .catch((err) => {
      res.status(501).json({ message: "It Went to the Catch", err });
    });
};

module.exports = { createUser, getUser, updateUser, deleteUser, loginUser };
