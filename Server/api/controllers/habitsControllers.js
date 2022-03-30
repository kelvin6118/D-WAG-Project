const HabitsTracked = require('../models/habit');
const Habits = require('../models/habit');

async function getUser (req, res) {
    try {
        const user = await HabitsTracked.getHabitsTracked(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function display (req, res) {
    try{
        const habits = await Habits.all;
        res.status(200).json(habits);
    } catch (err){
        res.status(500).send(err)
    }
}

module.exports = { getUser, display }
