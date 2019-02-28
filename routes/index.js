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
api.get('/v1/hello', async (req, res) => {
  let weather = await CheckWeather();
  res.status(200).send({
    success: true,
    message: 'The hello is here dude',
    hello: { msg: 'Hey Alan! You are welcome!' },
    weather
  })
});

export default api;