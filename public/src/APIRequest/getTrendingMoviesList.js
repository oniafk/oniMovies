import { elements } from '../handleNavigation/nodes.js';
import { API } from './AxiosAPIRequest.js';
import { renderMovieList } from './renderMovieList.js';

async function getTrendingMoviesList() {
  const api = await API;
  const { data } = await api.get('trending/movie/week');

  const movies = data.results;

  renderMovieList(movies, elements.genericSection);
}

export { getTrendingMoviesList };
