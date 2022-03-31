const express = require('express');
const router = express.Router();

const trackersControllers = require('../controllers/trackersControllers')

router.get('/', trackersControllers.display);
router.post('/', trackersControllers.trackerRequest);

module.exports = router;
