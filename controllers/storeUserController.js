const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports =  (req, res)=>{
    //'salt' adds random strings before password is hashed
    //We hash the password and create a user if the hash is successfull
    bcrypt.hash(req.body.password, 10 ,  (err, hash) => {
        if (err){
            return res.status(500).json({
                errors: err.message
            })
        }
        else {
            //The user is created when the hash above is succesfull.
            //We use the hash in password
         User.create({
             firstName: req.body.firstName,
             lastName: req.body.lastName,
             username: req.body.username,
             password: hash,
             email: req.body.email,
             isAdmin: false
         })
             //status code 201: "User created"
             .then(response => {
                 return res.status(201).json({
                 created: true
                 })
             })
             .catch(error => {
                 console.log(error.message);
                 return res.status(401).json({
                     errors: error.message
                 })
             })
        }
    })
};