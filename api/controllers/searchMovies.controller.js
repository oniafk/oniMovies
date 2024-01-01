const api = require('./APIRequest.controller');
const prisma = require('../../prisma/prisma');

async function checkDatabaseForSearchMovies(query) {
  const ifInfoOnDb = await prisma.movieDB_API_responses.findFirst({
    where: {
      query,
      contollerType: 'searchMovies',
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

async function fetchAndStoreSearchMovies(query) {
  const { data } = await api.get('search/movie', {
    params: {
      query,
    },
  });
  const movies = data.results;
  await prisma.movieDB_API_responses.create({
    data: {
      data: movies,
      contollerType: 'searchMovies',
      query,
    },
  });
  return movies;
}

async function getSearchMoviesList(query) {
  try {
    const movies = await checkDatabaseForSearchMovies(query);
    if (movies) {
      return movies;
    }

    return await fetchAndStoreSearchMovies(query);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getSearchMoviesList;
