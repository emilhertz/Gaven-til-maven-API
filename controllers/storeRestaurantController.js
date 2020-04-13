const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

module.exports = async (req, res)=>{
    try{
        await Restaurant.create({ ...req.body });
        await res.send({
            created: true
        })
    } catch (e) {
        await res.send({
            errors: e.message
        })
    }
};