const api = require('./APIRequest.controller');

async function getRelatedMoviesById(id) {
  try {
    const { data } = await api.get(`movie/${id}/similar`);

    const movies = data.results;

    return movies;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

module.exports = getRelatedMoviesById;
