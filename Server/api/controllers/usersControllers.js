const User = require('../models/user');

async function display(req, res) {
    try {
        const users = await User.all;
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function loginRequest(req, res) {
    try {

    }
}

module.exports = { display, getOne }
