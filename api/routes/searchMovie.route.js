const getSearchMoviesList = require('../controllers/searchMovies.controller.js');

async function searchMoviesRoute(req, res, next) {
  try {
    const { query } = req.query;
    const movies = await getSearchMoviesList(query);

    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
}

module.exports = searchMoviesRoute;
