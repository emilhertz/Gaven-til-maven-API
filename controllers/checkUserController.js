const User = require("../models/User");
module.exports = (req, res) => {
    User.findOne({
        _id: req.userData.userId
    })
        .then(response =>{
            res.status(200)
                .json({
                    user: response
                })
        })
        .catch(e =>{
            res.status(401)
                .json({
                    message: e.message
                })
        });
};