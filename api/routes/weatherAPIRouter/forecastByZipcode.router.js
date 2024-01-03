const getForecastByZipcode = require('../../controllers/weatherAPIRequest/weatherForecast.controller');

async function getForecastByZipcodeRouter(req, res) {
  try {
    if (!req.params) {
      throw new Error('Request parameters are undefined');
    }

    const zipCode = req.params.zipCode;
    const weather = await getForecastByZipcode(zipCode);

    res.status(200).json(weather);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getForecastByZipcodeRouter;
