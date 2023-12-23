const express = require('express');

const getTrendingMovies = require('./trendingMovies.route.js');
const getSearchMovies = require('./searchMovie.route.js');
const getTrendingMoviesList = require('./trendingMoviesList.route.js');
const relatedMoviesByIdRoute = require('./relatedMoviesById.route.js');
const movieById = require('./movieById.route.js');

function routerAPIRequest(app) {
  const router = express.Router();
  app.use('/', router);

  router.use('/trending/movie/day', getTrendingMovies);
  router.use('/trending/movie/week', getTrendingMoviesList);
  router.get('/search/movie', getSearchMovies);
  router.get('/movie/:id/similar', relatedMoviesByIdRoute);
  router.get('/movie/:id', movieById);
}

module.exports = routerAPIRequest;
