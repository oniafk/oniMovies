import { elements } from './nodes.js';
import { getTrendingMovies } from '../APIRequest/getTrendingMovies.js';
import { getCategoriesMoviesPreview } from '../APIRequest/getCategoriesPreview.js';

function HomePage() {
  elements.headerSection.classList.remove('header-container--long');
  elements.headerSection.style.background = '';
  elements.arrowBtn.classList.add('inactive');
  elements.arrowBtn.classList.remove('header-arrow--white');
  elements.headerTitle.classList.remove('inactive');
  elements.headerCategoryTitle.classList.add('inactive');
  elements.searchForm.classList.remove('inactive');
  elements.trendingPreviewSection.classList.remove('inactive');
  elements.categoriesPreviewSection.classList.remove('inactive');
  elements.genericSection.classList.add('inactive');
  elements.movieDetailSection.classList.add('inactive');

  getTrendingMovies();
  getCategoriesMoviesPreview();
}

export { HomePage };
