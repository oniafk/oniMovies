const api = require('./APIRequest.controller');

async function getSearchMoviesList(query) {
  try {
    const { data } = await api.get('search/movie', {
      params: {
        query,
      },
    });

    const movies = data.results;

    return movies;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

module.exports = getSearchMoviesList;
