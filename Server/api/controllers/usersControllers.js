const User = require('../models/user');

async function display(req, res) {
    try {
        const users = await User.all;
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err);
    }
}

// async function loginRequest(req, res) {
//     try {

//     }
// }

async function registerRequest(req, res){
    try {
        const user = await User.create(req.body);
        res.status(201).json(user)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { display, registerRequest}
