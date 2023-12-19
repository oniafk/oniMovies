import { API } from './AxiosAPIRequest.js';
import { elements } from '../handleNavigation/nodes.js';
import { renderCategoryList } from './renderCategoryList.js';

async function getCategoriesMoviesPreview() {
  const api = await API;
  const { data } = await api.get('genre/movie/list');

  const categories = data.genres;

  renderCategoryList(categories, elements.categoriesPreviewList);
}

export { getCategoriesMoviesPreview };
