import { elements } from '../handleNavigation/nodes.js';
import { renderMovieList } from './renderMovieList.js';

async function getTrendingMovies() {
  const response = await fetch('http://localhost:3000/trending/movie/day');
  const movies = await response.json();

  renderMovieList(movies, elements.trendingMoviesPreviewList);
}

export { getTrendingMovies };
