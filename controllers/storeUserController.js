const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt')

module.exports =  (req, res)=>{
    bcrypt.hash(req.body.password, 10 ,  (err, hash) => {
        if (err){
            return res.status(500).json({
                errors: err.message
            })
        } else {
         User.create({
             firstName: req.body.firstName,
             lastName: req.body.lastName,
             username: req.body.username,
             //https://www.youtube.com/watch?v=_EP2qCmLzSE
             password: hash,
             email: req.body.email,
             isAdmin: req.body.isAdmin
         })
            //status code 201: "User created"
            return res.status(201).json({
                created: true
            })
        }
    })
}