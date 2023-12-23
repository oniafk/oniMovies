import { elements } from '../handleNavigation/nodes.js';
import { renderMovieList } from './renderMovieList.js';

async function getMoviesByCategory(id, categoryName) {
  try {
    const url = new URL('http://localhost:3000/discover/movie/:id');
    url.pathname = url.pathname.replace(':id', id);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const movies = await response.json();
    renderMovieList(movies, elements.genericSection);

    elements.headerCategoryTitle.innerHTML = categoryName;
  } catch (error) {
    console.error(error.message);
  }
}

export { getMoviesByCategory };
