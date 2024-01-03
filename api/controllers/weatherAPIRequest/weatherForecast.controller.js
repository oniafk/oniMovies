const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');

const weatherAPIBaseURL = 'https://api.weatherapi.com/v1';
const KEY_EXAMPLPE = process.env.WEATHER_API_KEY;

async function getForecastByZipcode(zipCode) {
  try {
    const weather = await axios
      .get(
        `${weatherAPIBaseURL}/forecast.json?key=${KEY_EXAMPLPE} &q=${zipCode}&days=3&aqi=no&alerts=no`,
      )
      .then((response) => {
        const weather = response.data;
        return weather;
      });
    return weather;
  } catch (error) {
    return { message: error.message };
  }
}

module.exports = getForecastByZipcode;
