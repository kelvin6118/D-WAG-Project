const User = require('../models/user');
const bcrypt = require('bcryptjs')

async function display(req, res) {
    try {
        const users = await User.all;
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err);
    }
}


async function registerRequest(req, res){
    try {
        await User.create(req.body)
        res.status(201).json({msg: 'User Created'})
    } catch (err) {
        res.status(422).json({err})
    }
}

async function loginRequest(req, res) {
    try {
        const user = await User.findByUser(req.body.username);
        if(!user){ throw new Error('No user with this username')};
        const authed = await bcrypt.compare(req.body.password, user.password)
        if (!!authed){
            res.status(200).json({ user: user.username})
        } else {
            throw new Error('User could not be authenticated')
        } 
    } catch (err) {
            res.status(401).json({ err })
        }
    }



module.exports = { display, loginRequest, registerRequest}
