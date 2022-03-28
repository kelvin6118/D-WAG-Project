const express = require('express');
const cors = require('cors');

const server = express();
const userRoutes = require('./routes/usersRoutes')

server.use(cors());
server.use(express.json());

server.use('/user', userRoutes)

module.exports = server
