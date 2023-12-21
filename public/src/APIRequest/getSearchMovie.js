import { elements } from '../handleNavigation/nodes.js';
import { renderMovieList } from './renderMovieList.js';

async function getSearchMovie(query) {
  try {
    const url = new URL('http://localhost:3000/search/movie');
    url.searchParams.append('query', query);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const movies = await response.json();
    renderMovieList(movies, elements.genericSection);
  } catch (error) {
    console.error(error.message);
  }
}

export { getSearchMovie };
