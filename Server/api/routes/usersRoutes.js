const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersControllers')
const habitsTrackedController = require('../controllers/habitsTrackedControllers')

router.get('/', userController.display);
router.get('/:id', habitsTrackedController.getUser);
router.post('/login', userController.loginRequest);

router.post('/', userController.registerRequest);

module.exports = router;
