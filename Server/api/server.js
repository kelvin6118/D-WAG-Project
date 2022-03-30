const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const userRoutes = require('./routes/usersRoutes')
const habitsRoutes = require('./routes/habitsRoutes')

server.use('/users', userRoutes);
server.use('/habits', habitsRoutes);

server.get('/', (req, res) => res.send('Welcome to Habit Tracker 😊'))


module.exports = server
