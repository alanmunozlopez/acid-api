"use strict";
import axios from 'axios';
import { API_KEY, FORECAST_URL } from '../../config/darksky';

const DarkskyService = {};

DarkskyService.forecastByLocation = async capital => {
  try {
    const url = `${FORECAST_URL}${API_KEY}/${capital.lat},${capital.lng}`;

    console.log(`URL DARKSKY: ${url}`);

    const response = await axios.get(url);
    const data = await response.data.currently;
    let forecast = {
      capital,
      details: data
    };

    return forecast;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default DarkskyService;
