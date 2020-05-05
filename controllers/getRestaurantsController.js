const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

module.exports =  async (req, res)=>{
    //Finds all the restaurants in the database
    Restaurant.find({})
    //It will now return an admin object instead of admin id.
        .populate("admin")
        //Sends a response to the frontend with all the restaurants
        .then(response =>{
            res.status(200).json({
                restaurants: response
            })
        })
        //Otherwise it sends an errormessage
        .catch(e =>{
            res.status(401).json({
                message: e.message
            });
        })
};

