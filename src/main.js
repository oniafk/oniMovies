import { getTrendingMovies } from "./getTrendingMovies.js";
import { getCategoriesMoviesPreview } from "./getCategoriesPreview.js";
import { navigator } from "./handleNavigation/navigation.js";

getTrendingMovies();

const App = () => {
  navigator();
  getTrendingMovies();
  getCategoriesMoviesPreview();
};

App();
