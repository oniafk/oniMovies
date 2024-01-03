const getWeatherByDefault = require('../../controllers/weatherAPIRequest/weatherAPIRequest.controller');

async function getWeatherByDefaultRoute(req, res) {
  try {
    const weather = await getWeatherByDefault();
    res.status(200).json(weather);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getWeatherByDefaultRoute;
