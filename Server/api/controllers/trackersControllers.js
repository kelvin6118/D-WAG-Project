const Tracker = require('../models/userTracker');

async function display(req, res) {
    try {
        const tracker = await Tracker.all;
        res.status(200).json(tracker);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function trackerRequest(req, res){
    try {
        const trackers = await Tracker.create(req.body);
        res.status(201).json(trackers)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { display, trackerRequest }
