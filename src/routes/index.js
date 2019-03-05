"use strict";

import express from 'express';
import bodyParser from 'body-parser';

import CheckWeather from './controllers';

// Set express api
const api = express();

// Parse requests
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

api.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// hello dude
api.get('/forecast', async (req, res) => {
  
  let response = {
    success: true,
    message: 'All ok dude'
  };

  let forecast = {};
  
  try {
    let location = {
      lat: req.query.lat,
      lng: req.query.lng
    };
  
    console.log(`location ${JSON.stringify(location)}`);
  
    forecast = await CheckWeather(location); 
  } catch (error) {
    response.success = false;
    response.message = 'A problem on the request'
  }
  res.status(200).send({
    success: response.success,
    message: response.message,
    forecast
  })
});

export default api;