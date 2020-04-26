const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

module.exports =  async (req, res)=>{
  try{
      const restaurants = await Restaurant.find({});
      res.status(200).json({
          restaurants: restaurants
      });
  }
  catch (e) {
      res.status(401).json({
          message: e.message
      });
  }
};