import { API } from './AxiosAPIRequest.js';
import { elements } from '../handleNavigation/nodes.js';
import { renderMovieList } from './renderMovieList.js';

async function getMoviesByCategory(id, categoryName) {
  const api = await API;
  const { data } = await api.get('discover/movie', {
    params: {
      with_genres: id,
    },
  });

  const movies = data.results;

  renderMovieList(movies, elements.genericSection);

  elements.headerCategoryTitle.innerHTML = categoryName;
}

export { getMoviesByCategory };
