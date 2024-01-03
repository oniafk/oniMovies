const getWeathertByZipcode = require('../../controllers/weatherAPIRequest/weatherByZipcode.controller');

async function getWeatherByZipcodeRoute(req, res) {
  try {
    if (!req.params) {
      throw new Error('Request parameters are undefined');
    }

    const zipCode = req.params.zipCode;
    const weather = await getWeathertByZipcode(zipCode);

    res.status(200).json(weather);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getWeatherByZipcodeRoute;
