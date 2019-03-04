"use strict";
import axios from 'axios';
import { REST_COUNTRIES_URL } from '../../config/rest-countries';

const RestCountriesService = {};

RestCountriesService.capitalLocationByCountry = async countryName => {
  try {
    let urlCapitalName = `${REST_COUNTRIES_URL}name/${countryName}`;
    let responseCapitalByCountry = await axios.get(urlCapitalName);
    let capitalName = await responseCapitalByCountry.data[0].capital;

    let urlCapitalCoords = `${REST_COUNTRIES_URL}capital/${capitalName}`;
    let responseCapitalCoordsByName = await axios.get(urlCapitalCoords);

    let latlngCapital = await responseCapitalCoordsByName.data[0].latlng;

    let capital = {
      name: capitalName,
      lat: latlngCapital[0],
      lng: latlngCapital[1]
    };

    return capital;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default RestCountriesService;
