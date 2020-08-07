const express = require('express');
const mongoose = require('mongoose');
require('./models/user');
const UsersRoutes = require('./routes/user');
const server = express();
const PORT = process.env.PORT || 5000;
server.use(express.json());
server.use('/api/Users', UsersRoutes);

mongoose.connect(
    'mongodb+srv://tmcgowen:sUuZ1SNvN9NgO0WA@cluster0.fb91g.mongodb.net/Users',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    },
).then(() => {
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}).catch((err) => {
    console.log('Mongoose Connection Failed',err)
})

module.exports = server;