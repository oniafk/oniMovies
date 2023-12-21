const getdMoviesById = require('../controllers/movieById.controller');

async function movieById(req, res, next) {
  try {
    if (!req.params) {
      throw new Error('Request parameters are undefined');
    }

    const id = req.params.id;
    const movies = await getdMoviesById(id);

    console.log(movies, 'route');

    res.status(200).json(movies);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = movieById;
