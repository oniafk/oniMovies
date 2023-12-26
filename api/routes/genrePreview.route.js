const getGenres = require('../controllers/genrePreview.controller.js');

async function getGenresRoute(req, res) {
  try {
    const genres = await getGenres();

    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getGenresRoute;
