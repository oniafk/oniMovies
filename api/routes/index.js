const express = require('express');
//Movie DB API
const getTrendingMovies = require('./trendingMovies.route.js');
const getSearchMovies = require('./searchMovie.route.js');
const getTrendingMoviesList = require('./trendingMoviesList.route.js');
const relatedMoviesByIdRoute = require('./relatedMoviesById.route.js');
const movieById = require('./movieById.route.js');
const getGenres = require('./genrePreview.route.js');
const moviesByCategoryRoute = require('./moviesByCategory.route.js');

//Weather API

const getWeatherByDefault = require('./weatherAPIRouter/weatherDefault.router.js');
const getWeatherByZipcode = require('./weatherAPIRouter/weatherByZipcode.router.js');
const getForecastByZipcode = require('./weatherAPIRouter/forecastByZipcode.router.js');
const getForecastDefault = require('./weatherAPIRouter/weatherDefault.router.js');

function routerAPIRequest(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/trending/movie/day', getTrendingMovies);
  router.use('/trending/movie/week', getTrendingMoviesList);
  router.get('/search/movie', getSearchMovies);
  router.get('/movie/:id/similar', relatedMoviesByIdRoute);
  router.get('/movie/:id', movieById);
  router.get('/category/movie/list', getGenres);
  router.get('/discover/movie/:id', moviesByCategoryRoute);

  router.get('/weather/default', getWeatherByDefault);
  router.get('/weather/zipcode/:zipCode', getWeatherByZipcode);
  router.get('/forecast/zipcode/:zipCode', getForecastByZipcode);
  router.get('/forecast/default', getForecastDefault);
}

module.exports = routerAPIRequest;
