import { elements } from './nodes.js';
import { getMovieByID } from '../APIRequest/getMovieByID.js';

function moviePage() {
  elements.headerSection.classList.add('header-container--long');
  // elements.headerSection.style.background = "";
  elements.arrowBtn.classList.remove('inactive');
  elements.arrowBtn.classList.add('header-arrow--white');
  elements.headerTitle.classList.add('inactive');
  elements.headerCategoryTitle.classList.add('inactive');
  elements.searchForm.classList.add('inactive');

  elements.trendingPreviewSection.classList.add('inactive');
  elements.categoriesPreviewSection.classList.add('inactive');
  elements.genericSection.classList.add('inactive');
  elements.movieDetailSection.classList.remove('inactive');

  const [_, movieID] = location.hash.split('=');
  getMovieByID(movieID);
}

export { moviePage };
