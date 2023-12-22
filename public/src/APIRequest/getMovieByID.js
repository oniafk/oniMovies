import { elements } from '../handleNavigation/nodes.js';
import { renderCategoryList } from './renderCategoryList.js';
import { getRelatedMoviesByID } from './getRelatedMoviesByID.js';

async function getMovieByID(id) {
  try {
    const url = new URL('http://localhost:3000/movie/:id');
    url.pathname = url.pathname.replace(':id', id);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const movie = await response.json();

    elements.movieDetailTitle.textContent = movie.title;
    elements.movieDetailDescription.textContent = movie.overview;
    elements.movieDetailScore.textContent = movie.vote_average;

    renderCategoryList(movie.genres, elements.movieDetailCategoriesList);

    const movieURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    elements.headerSection.style.background = `
  linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.35) 19.27%,
    rgba(0, 0, 0, 0) 29.17%

  ),
    url(${movieURL})`;

    getRelatedMoviesByID(id);
  } catch (error) {
    console.error(error.message);
  }
}

export { getMovieByID };
