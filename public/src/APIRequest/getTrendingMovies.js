import { API } from './AxiosAPIRequest.js';
import { elements } from '../handleNavigation/nodes.js';
import { renderMovieList } from './renderMovieList.js';

async function getTrendingMovies() {
  const api = await API;
  const { data } = await api.get('trending/movie/day');

  const movies = data.results;

  renderMovieList(movies, elements.trendingMoviesPreviewList);
}

export { getTrendingMovies };
