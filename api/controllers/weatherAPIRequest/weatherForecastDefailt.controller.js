const detenv = require('dotenv');
detenv.config();

const axios = require('axios');

const weatherAPIBaseURL = 'https://api.weatherapi.com/v1';
const KEY_EXAMPLPE = process.env.WEATHER_API_KEY;

async function getWeatherByDefault() {
  try {
    const weather = await axios
      .get(
        `${weatherAPIBaseURL}/current.json?key=${KEY_EXAMPLPE} &q=London&days=1&aqi=no&alerts=no`,
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
