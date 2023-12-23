const api = require('./APIRequest.controller');

async function getdMoviesById(id) {
  try {
    const { data } = await api.get(`movie/${id}`);

    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

module.exports = getdMoviesById;
