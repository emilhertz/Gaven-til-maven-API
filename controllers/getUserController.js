const mongoose = require('mongoose');
const User = require('../models/User');

module.exports =  async (req, res)=>{
    try{
        const user = await User.find({
            username: req.body.username
        })
        if (user.length < 1) {
            //Status code for un-authorized
            return res.status(401).json({
                message: "Auth failed"
            })
        }

        res.send({users: users});
    }
    catch (e) {
        res.send({
            error: e.message,
            users: {}
        });
    }
};