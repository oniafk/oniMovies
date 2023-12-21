import { elements } from '../handleNavigation/nodes.js';
import { renderMovieList } from './renderMovieList.js';

async function getRelatedMoviesByID(id) {
  try {
    const url = new URL('http://localhost:3000/movie/:id/similar');
    url.pathname = url.pathname.replace(':id', id);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const movies = await response.json();
    renderMovieList(movies, elements.relatedMoviesContainer);
  } catch (error) {
    console.error(error.message);
  }
}

export { getRelatedMoviesByID };
