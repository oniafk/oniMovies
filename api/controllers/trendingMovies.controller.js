const api = require('./APIRequest.controller');
const prisma = require('../../prisma/prisma');

async function checkDatabaseForTrendingMovies() {
  const ifInfoOnDb = await prisma.movieDB_API_responses.findFirst({
    where: {
      query: 'day',
      contollerType: 'trendingMovies',
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

async function fetchAndStoreTrendingMovies() {
  const { data } = await api.get('trending/movie/day');
  const movies = data.results;
  await prisma.movieDB_API_responses.create({
    data: {
      data: movies,
      contollerType: 'trendingMovies',
      query: 'day',
    },
  });
  return movies;
}

async function getTrendingMovies() {
  try {
    const movies = await checkDatabaseForTrendingMovies();
    if (movies) {
      return movies;
    }

    return await fetchAndStoreTrendingMovies();
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getTrendingMovies;
