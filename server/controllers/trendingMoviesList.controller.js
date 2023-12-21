const api = require('./APIRequest.controller');

async function getTrendingMoviesList() {
  try {
    const { data } = await api.get('trending/movie/week');

    const movies = data.results;

    return movies;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

module.exports = getTrendingMoviesList;
