const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    User.find({
        username: req.body.username
    })
        //checks if array is empty
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            //compares password with hashed password in database
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                //if error occurs during comparison
                if (err) {
                    return res.status(401).json( {
                        message: "Auth failed"
                    })
                }
                //runs if typed password matches the one in database
                if (result) {
                    //creation of token
                    const token = jwt.sign({
                        //payload = the information which is encoded
                        userId: user[0]._id,
                        isAdmin: user[0].isAdmin
                    },
                        //privateKey which the token is signed with
                        "hemmelig",
                        //options - only expiration of token
                        {
                            expiresIn: "1h"
                            }
                        );
                    //returns response which includes cookie with token, status code, and json object
                    return res
                        .status(200)
                        .json({
                            message: 'Auth Successful',
                            isAdmin: user[0].isAdmin,
                            token: token
                        })
                }
                //runs if password does not match
                return res.status(401).json( {
                    message: "Auth failed"
                })
            })
        })
        //If we doesn't get any response from the database
        .catch((err) =>{
            console.log(err);
            return res.status(401).json( {
                message: "Auth failed"
            })
        })
};