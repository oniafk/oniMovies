const api = require('./APIRequest.controller');
const prisma = require('../../prisma/prisma');

async function checkDatabaseForTrendingMovies() {
  const ifInfoOnDb = await prisma.movieDB_API_responses.findFirst({
    where: {
      query: 'week',
      contollerType: 'trendingMoviesList',
      createdAt: {
        gte: new Date(new Date() - 1000 * 60 * 60 * 24 * 7),
      },
    },
  });

  if (!ifInfoOnDb) {
    return null;
  }

  return ifInfoOnDb.data;
}

async function fetchAndStoreTrendingMoviesWeek() {
  const { data } = await api.get('trending/movie/week');
  const movies = data.results;
  await prisma.movieDB_API_responses.create({
    data: {
      data: movies,
      contollerType: 'trendingMoviesList',
      query: 'week',
    },
  });
  return movies;
}

async function getTrendingMoviesList() {
  try {
    const movies = await checkDatabaseForTrendingMovies();
    if (movies) {
      return movies;
    }

    return await fetchAndStoreTrendingMoviesWeek();
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

module.exports = getTrendingMoviesList;
