const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersControllers')

router.get('/', userController.display);
router.post('/login', userController.loginRequest);

module.exports = router;
