const express = require('express');

const getTrendingMovies = require('./trendingMovies.route');

function routerAPIRequest(app) {
  const router = express.Router();
  app.use('/', router);

  router.use('/trending/movie/day', getTrendingMovies);
}

module.exports = routerAPIRequest;
