"use strict";
import axios from 'axios';
import { API_KEY, FORECAST_URL } from '../../config/darksky';

const DarkskyService = {};

DarkskyService.forecastByLocation = async location => {
  try {
    const url = `${FORECAST_URL}${API_KEY}/${location.lat},${location.lng}`;
    const response = await axios.get(url);
    const data = await response.data.currently;
    
    let forecast = {
      location,
      details: data
    };

    return forecast;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default DarkskyService;
