const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

require("./models/user");
const UsersRoutes = require("./routes/user");
const EmailRoutes = require("./routes/emails");
const server = express();
const PORT = process.env.PORT || 5000;

// Invoke dependencies
server.use(express.json());
server.use(helmet());
server.use(
  cors({
    origin: "*",
    // allows headers to be read
    credentials: true,
  })
);

server.use("/api/Users", UsersRoutes);
server.use("/api/Email", EmailRoutes);

mongoose
  .connect(
    "mongodb+srv://tmcgowen:sUuZ1SNvN9NgO0WA@cluster0.fb91g.mongodb.net/Users",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log("Mongoose Connection Failed", err);
  });

module.exports = server;
