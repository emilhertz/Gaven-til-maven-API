const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

module.exports =  async (req, res)=>{
  try{
      const restaurants = await Restaurant.find({});
      res.send({restaurants: restaurants});
  }
  catch (e) {
      res.send({
          error: e.message,
          restaurants: {}
      });
  }
};