import { elements } from '../handleNavigation/nodes.js';
import { renderCategoryList } from './renderCategoryList.js';

async function getCategoriesMoviesPreview() {
  const response = await fetch('http://localhost:3000/category/movie/list');
  const categories = await response.json();

  renderCategoryList(categories, elements.categoriesPreviewList);
}

export { getCategoriesMoviesPreview };
