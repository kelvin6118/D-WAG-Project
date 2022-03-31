const Habits = require('../models/Habits');

async function display (req, res) {
    try{
        const habits = await Habits.all;
        res.status(200).json(habits);
    } catch (err){
        res.status(500).send(err)
    }
}

module.exports = { display }
