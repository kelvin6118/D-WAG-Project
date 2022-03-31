const HabitsTracked = require('../models/habitsTracked');

async function getUser (req, res) {
    try {
        const user = await HabitsTracked.getHabitsTracked(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({err})
    }
}

module.exports = { getUser }
