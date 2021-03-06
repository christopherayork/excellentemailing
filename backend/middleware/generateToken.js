// Import the JWT and secrets
const jwt = require("jsonwebtoken");

module.exports = (user) => {
  // Create the payload and options
  const payload = {
    subject: user.id,
    email: user.email,
    username: user.username
  };
  const options = {
    expiresIn: "8h",
  };
  // Fix this later, the secret isn't getting here like it should
  return jwt.sign(payload, process.env.SECRET, options);
};
