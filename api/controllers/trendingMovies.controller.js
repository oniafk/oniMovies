const api = require('./APIRequest.controller');

async function getTrendingMovies() {
  try {
    const { data } = await api.get('trending/movie/day');
    const movies = data.results;
    return movies;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

module.exports = getTrendingMovies;
