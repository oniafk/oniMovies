const api = require('./APIRequest.controller');

async function getMoviesByCategory(id) {
  try {
    const { data } = await api.get('discover/movie', {
      params: {
        with_genres: id,
      },
    });

    const movies = data.results;

    return movies;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

module.exports = getMoviesByCategory;
