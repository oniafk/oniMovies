const getForecastDefault = require('../../controllers/weatherAPIRequest/forecastByDefault.controller');

async function getForecastDefaultRouter(req, res) {
  try {
    const weather = await getForecastDefault();
    res.status(200).json(weather);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getForecastDefaultRouter;
