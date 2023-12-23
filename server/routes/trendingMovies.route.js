const express = require('express');
const getTrendingMovies = require('../controllers/trendingMovies.controller.js');
const router = express.Router();

router.get('/', getTrendingMovies);

module.exports = router;
