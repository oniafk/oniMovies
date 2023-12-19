import { API } from './AxiosAPIRequest.js';
import { elements } from '../handleNavigation/nodes.js';
import { renderMovieList } from './renderMovieList.js';

async function getSearchMovie(query) {
  const api = await API;
  const { data } = await api.get('search/movie', {
    params: {
      query,
    },
  });

  const movies = data.results;

  renderMovieList(movies, elements.genericSection);
}

export { getSearchMovie };
