import { elements } from './nodes.js';
import { getSearchMovie } from '../APIRequest/getSearchMovie.js';

function searchPage() {
  elements.headerSection.classList.remove('header-container--long');
  elements.headerSection.style.background = '';
  elements.arrowBtn.classList.remove('inactive');
  elements.arrowBtn.classList.remove('header-arrow--white');
  elements.headerTitle.classList.add('inactive');
  elements.headerCategoryTitle.classList.add('inactive');
  elements.searchForm.classList.remove('inactive');

  elements.trendingPreviewSection.classList.add('inactive');
  elements.categoriesPreviewSection.classList.add('inactive');
  elements.genericSection.classList.remove('inactive');
  elements.movieDetailSection.classList.add('inactive');

  const [_, query] = location.hash.split('=');
  getSearchMovie(query);
}

export { searchPage };
