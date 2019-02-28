"use strict";
import axios from 'axios';
import { API_KEY, GEOCODE_URL  } from '../../config/google';

const GoogleService = {};

GoogleService.getData = async location => {
  try {
    // const response = await axios.get(url);
    const url = `${GEOCODE_URL}${location}&sensor=false&key=${API_KEY}`;
    const response = await axios.get(url);
    const data = response.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default GoogleService;
