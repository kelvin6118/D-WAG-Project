const express = require('express');
const router = express.Router();

const activitiesController = require('../controllers/activitiesController');

router.get('/', activitiesController.display);
router.get('/:id', activitiesController.getById)
router.post('/', activitiesController.activityRequest);

module.exports = router;
