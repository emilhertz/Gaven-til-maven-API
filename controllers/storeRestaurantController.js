const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

module.exports = async (req, res)=>{
    //Try-catch statement for restaurant creation.
    try{
        //req.body contains the inputfield data
        //req.userData.userId contains the userId of the currently logged in user.
        //We add adminId when a restaurant is created
        await Restaurant.create({ ...req.body, adminId: req.userData.userId});
        //When a restaurant is succesfully created
        await res.status(200).json({
            message: "Restaurant er nu oprettet"
        })
    } catch (e) {
        await res.status(401).json({
            message: e.message
        })
    }
};