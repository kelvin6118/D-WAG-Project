const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersControllers')

router.get('/', userController.display);
router.get('/:id', userController.getUser);
router.post('/login', userController.loginRequest);

router.post('/', userController.registerRequest);

module.exports = router;
