const Restaurant = require('../models/Restaurant.js');

module.exports = (req, res) => {
    try{
        Restaurant.find({
            admin: req.userData.userId
        })
            .populate("admin")
            .then(restaurants => {
                return res.status(200).json({
                    restaurants: restaurants
                })
            })
            .catch(e => {
                return res.status(500).json({
                    restaurants: []
                })
            })
    } catch (e) {
        return res.status(500).json({
            restaurants: []
        })
    }
};