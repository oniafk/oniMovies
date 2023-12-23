import { API } from './AxiosAPIRequest.js';
import { elements } from '../handleNavigation/nodes.js';
import { renderMovieList } from './renderMovieList.js';

async function getRelatedMoviesByID(id) {
  const api = await API;
  const { data: relatedMovies } = await api.get(`movie/${id}/similar`);

  renderMovieList(relatedMovies.results, elements.relatedMoviesContainer);
}

export { getRelatedMoviesByID };
