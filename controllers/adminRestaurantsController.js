const Restaurant = require('../models/Restaurant.js');

module.exports = (req, res) => {
    try{
        //Finds all the restaurants that belongs to the admin logged in
        Restaurant.find({
            admin: req.userData.userId
        })
            //Turns the id from the owner of the restaurant to an object
            .populate("admin")
            //returns the restaurants
            .then(restaurants => {
                console.log(restaurants)
                return res.status(200).json({
                    restaurants: restaurants
                })
            })
            //Sends an empty json object, because there is no restaurant
            .catch(e => {
                return res.status(500).json({
                    restaurants: []
                })
            })
        //Sends an empty json object, because there is no restaurant
    } catch (e) {
        return res.status(500).json({
            restaurants: []
        })
    }
};