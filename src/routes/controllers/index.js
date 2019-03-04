"use strict";

import GoogleService from '../../services/google-api';
import RestCountriesService from '../../services/rest-countries-api';
import DarkskyService from '../../services/darksky-api';

let CheckWeather = async (location) => {
  try {
    let geoCodeResponse = await GoogleService.getData(`${location.lat}, ${location.lng}`);
    
    let country = {};
    geoCodeResponse.results[0].address_components.map(foo => {
      if(foo.types.includes("country")) {
        country = foo;
      }
    });

    let capitalLocation = await RestCountriesService.capitalLocationByCountry(country.long_name);

    let forecast = await DarkskyService.forecastByLocation(capitalLocation);

    return forecast; 
  } catch (error) {
    return error;
  }
}

export default CheckWeather;