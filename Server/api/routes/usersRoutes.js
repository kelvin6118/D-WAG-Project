const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersControllers')
const habitController = require('../controllers/habitsControllers')

router.get('/', userController.display);
router.get('/:id', habitController.getUser);
router.post('/login', userController.loginRequest);

router.post('/', userController.registerRequest);

module.exports = router;
