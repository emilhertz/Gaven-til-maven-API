const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

module.exports =  async (req, res)=>{
    Restaurant.find({})
        .populate("admin")
        .then(response =>{
            res.status(200).json({
                restaurants: response
            })
        })
        .catch(e =>{
            res.status(401).json({
                message: e.message
            });
        })
};

