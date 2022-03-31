const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const userRoutes = require('./routes/usersRoutes')
const habitsRoutes = require('./routes/habitsRoutes')
const activitiesRoutes = require('./routes/activitiesRoutes')
const userTrackerRoutes = require('./routes/trackersRoutes')

server.use('/users', userRoutes);
server.use('/habits', habitsRoutes);
server.use('/activities', activitiesRoutes);
server.use('/trackers', userTrackerRoutes);

server.get('/', (req, res) => res.send('Welcome to Habit Tracker 😊'))


module.exports = server
