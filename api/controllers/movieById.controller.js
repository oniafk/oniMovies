const api = require('./APIRequest.controller');
const prisma = require('../../prisma/prisma');

async function checkDatabaseForMovieById(id) {
  const ifInfoOnDb = await prisma.movieDB_API_responses.findFirst({
    where: {
      query: id,
      contollerType: 'movieById',
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

async function fetchAndStoreMovieById(id) {
  const { data } = await api.get(`movie/${id}`);
  const movie = data;
  await prisma.movieDB_API_responses.create({
    data: {
      data: movie,
      contollerType: 'movieById',
      query: id,
    },
  });
  return movie;
}

async function getdMoviesById(id) {
  try {
    const movie = await checkDatabaseForMovieById(id);
    if (movie) {
      return movie;
    }

    return await fetchAndStoreMovieById(id);
  } catch (error) {
    throw new Error(error.message);
  }
}

// async function getdMoviesById(id) {

//   try {
//     const { data } = await api.get(`movie/${id}`);

//     return data;
//   } catch (error) {
//     console.log(error.message);
//     throw new Error(error.message);
//   }
// }

module.exports = getdMoviesById;
