const getMoviesByCategory = require('../controllers/moviesByCategory.controller');

async function moviesByCategoryRoute(req, res, next) {
  try {
    if (!req.params) {
      throw new Error('Request parameters are undefined');
    }

    const id = req.params.id;
    const movies = await getMoviesByCategory(id);

    res.status(200).json(movies);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = moviesByCategoryRoute;
