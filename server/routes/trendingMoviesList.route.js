const express = require('express');
const getTrendingMoviesList = require('../controllers/trendingMoviesList.controller.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const movies = await getTrendingMoviesList();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
