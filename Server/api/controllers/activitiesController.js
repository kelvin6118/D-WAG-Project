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

async function getById(req, res){
    try {
        const user = await Activity.findByUser(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({err})
    }
}

module.exports = { display, activityRequest, getById }
