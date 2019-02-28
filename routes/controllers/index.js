"use strict";

import GoogleService from '../../services/google-api';

let CheckWeather = async (location) => {
  try {
    let geoCodeResponse = await GoogleService.getData('-33.419479, -70.609073');
    console.log('0800');
    console.log(geoCodeResponse);
    let country = {};
    geoCodeResponse.results[0].address_components.map(foo => {
      if(foo.types.includes("country")) {
        country = foo;
      }
    });
    return country; 
  } catch (error) {
    return error;
  }
}

export default CheckWeather;