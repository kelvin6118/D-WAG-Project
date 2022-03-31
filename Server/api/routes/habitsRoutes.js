const express = require('express');
const router = express.Router();

const habitController = require('../controllers/habitsControllers')

router.get('/', habitController.display);

module.exports = router;
