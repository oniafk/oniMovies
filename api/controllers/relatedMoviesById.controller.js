const api = require('./APIRequest.controller');
const prisma = require('../../prisma/prisma');

async function checkDatabaseForRelatedMovies(id) {
  const ifInfoOnDb = await prisma.movieDB_API_responses.findFirst({
    where: {
      query: id,
      contollerType: 'relatedMovies',
      createdAt: {
        gte: new Date(new Date() - 1000 * 60 * 60 * 24),
      },
    },
  });

  if (!ifInfoOnDb) {
    return null;
  }

  return ifInfoOnDb.data;
}

async function fetchAndStoreRelatedMovies(id) {
  const { data } = await api.get(`movie/${id}/similar`);
  const movies = data.results;
  await prisma.movieDB_API_responses.create({
    data: {
      data: movies,
      contollerType: 'relatedMovies',
      query: id,
    },
  });
  return movies;
}

async function getRelatedMoviesById(id) {
  try {
    const movies = await checkDatabaseForRelatedMovies(id);
    if (movies) {
      return movies;
    }

    return await fetchAndStoreRelatedMovies(id);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getRelatedMoviesById;
