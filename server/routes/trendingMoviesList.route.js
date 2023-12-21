const express = require('express');
const getTrendingMoviesList = require('../controllers/TrendingMoviesList.controller');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const movies = await getTrendingMoviesList();

    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
