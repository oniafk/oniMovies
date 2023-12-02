import { getTrendingMovies } from "./getTrendingMovies.js";
import { getCategoriesMoviesPreview } from "./getCategoriesPreview.js";

getTrendingMovies();

const App = () => {
  getTrendingMovies();
  getCategoriesMoviesPreview();
};

App();
