const api = require('./APIRequest.controller');
const prisma = require('../../prisma/prisma');

async function checkDataBaseForGenres() {
  const ifInfoOnDb = await prisma.movieDB_API_responses.findFirst({
    where: {
      contollerType: 'genres',
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

async function fetchAndStoreGenres() {
  const { data } = await api.get('genre/movie/list');
  const genres = data.genres;
  await prisma.movieDB_API_responses.create({
    data: {
      data: genres,
      contollerType: 'genres',
    },
  });
  return genres;
}

async function getGenres() {
  try {
    const genres = await checkDataBaseForGenres();
    if (genres) {
      return genres;
    }

    return await fetchAndStoreGenres();
  } catch (error) {
    throw new Error(error.message);
  }
}

// async function getGenres() {
//   try {
//     const { data } = await api.get('genre/movie/list');
//     const genres = data.genres;
//     return genres;
//   } catch (error) {
//     console.error(error.message);
//     throw new Error(error.message);
//   }
// }

module.exports = getGenres;
