const api = require('./APIRequest.controller');

async function getGenres() {
  try {
    const { data } = await api.get('genre/movie/list');
    const genres = data.genres;
    return genres;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

module.exports = getGenres;
