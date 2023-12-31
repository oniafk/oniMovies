const express = require('express');
const getTrendingMovies = require('../controllers/trendingMovies.controller.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { query } = req.query;
    const movies = await getTrendingMovies(query);

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
