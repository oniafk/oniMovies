const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');

const weatherAPIBaseURL = 'https://api.weatherapi.com/v1';
const KEY_EXAMPLPE = process.env.WEATHER_API_KEY;

async function defaultRequest() {
  return await axios
    .get(
      `${weatherAPIBaseURL}/current.json?key=${KEY_EXAMPLPE} &q=London&aqi=no}`,
    )
    .then((response) => {
      const weather = response.data;
      return weather;
    });
}

module.exports = defaultRequest;
