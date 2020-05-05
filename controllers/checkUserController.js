const User = require("../models/User");
module.exports = (req, res) => {
    //uses the findOne method to find the user with the requested id
    User.findOne({
        _id: req.userData.userId
    })
        //Sends response if the id matches the id from the database
        .then(response =>{
            res.status(200)
                .json({
                    user: response
                })
        })
        //Finds the error and returns it in an object.
        .catch(e =>{
            res.status(401)
                .json({
                    message: e.message
                })
        });
};