const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    api_key: API_KEY,
  },
});

module.exports = api;
