const Activity = require('../models/Activities');

async function display(req, res) {
    try {
        const activities = await Activity.all;
        res.status(200).json(activities);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function activityRequest(req, res){
    try {
        const activity = await Activity.create(req.body);
        res.status(201).json(activity)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { display, activityRequest }
