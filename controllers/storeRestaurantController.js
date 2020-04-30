const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

module.exports = async (req, res)=>{
    //Try-catch statement for restaurant creation.
    try{
        //req.body contains the inputfield data
        //req.userData.userId contains the userId of the currently logged in user.
        //We add adminId when a restaurant is created
        await Restaurant.create({
            name: req.body.name,
            address: {
                streetName: req.body.address.streetName,
                streetNumber: req.body.address.streetNumber,
                zipCode: req.body.address.zipCode,
                city: req.body.address.city,
                country: req.body.address.country
                },
            description: req.body.description,
            admin: req.body.admin._id
        });
        //When a restaurant is successfully created
        await res.status(200).json({
            message: "Restaurant er nu oprettet"
        })
    } catch (e) {
        await res.status(401).json({
            message: e.message
        })
    }
};
