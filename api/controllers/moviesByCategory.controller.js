const api = require('./APIRequest.controller');
const prisma = require('../../prisma/prisma');

async function checkDatabaseForMoviesByCategory(id) {
  const ifInfoOnDb = await prisma.movieDB_API_responses.findFirst({
    where: {
      query: id,
      contollerType: 'MovieByCategory',
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

async function fetchAndStoreMoviesByCategory(id) {
  const { data } = await api.get('discover/movie', {
    params: {
      with_genres: id,
    },
  });
  const movies = data.results;
  await prisma.movieDB_API_responses.create({
    data: {
      data: movies,
      contollerType: 'MovieByCategory',
      query: id,
    },
  });
  return movies;
}

async function getMoviesByCategory(id) {
  try {
    const movies = await checkDatabaseForMoviesByCategory(id);
    if (movies) {
      return movies;
    }

    return await fetchAndStoreMoviesByCategory(id);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getMoviesByCategory;
