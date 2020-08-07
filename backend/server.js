const express = require('express');
const tasksRoutes = require('./routes/tasks');

const server = express();

server.use(express.json());
server.use('/api/tasks', tasksRoutes);

module.exports = server;