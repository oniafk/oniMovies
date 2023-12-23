import { elements } from './nodes.js';
import { getTrendingMoviesList } from '../APIRequest/getTrendingMoviesList.js';

function trendsPage() {
  elements.headerSection.classList.remove('header-container--long');
  elements.headerSection.style.background = '';
  elements.arrowBtn.classList.remove('inactive');
  elements.arrowBtn.classList.remove('header-arrow--white');
  elements.headerTitle.classList.add('inactive');
  elements.headerCategoryTitle.classList.remove('inactive');
  elements.searchForm.classList.add('inactive');

  elements.trendingPreviewSection.classList.add('inactive');
  elements.categoriesPreviewSection.classList.add('inactive');
  elements.genericSection.classList.remove('inactive');
  elements.movieDetailSection.classList.add('inactive');

  elements.headerCategoryTitle.innerHTML = 'Trending Movies';

  getTrendingMoviesList();
}

export { trendsPage };
