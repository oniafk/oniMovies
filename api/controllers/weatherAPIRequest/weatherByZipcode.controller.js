const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');

const weatherAPIBaseURL = 'https://api.weatherapi.com/v1';
const KEY_EXAMPLPE = process.env.WEATHER_API_KEY;

async function getWeatherByDefault(zipCode) {
  try {
    const weather = await axios
      .get(
        `${weatherAPIBaseURL}/current.json?key=${KEY_EXAMPLPE} &q=${zipCode}&aqi=no`,
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

module.exports = getWeatherByDefault;
