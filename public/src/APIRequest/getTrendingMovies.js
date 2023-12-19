import { API } from "./AxiosAPIRequest.js";
import { elements } from "../handleNavigation/nodes.js";
import { renderMovieList } from "./renderMovieList.js";

async function getTrendingMovies() {
  const { data } = await API("trending/movie/day");

  const movies = data.results;

  renderMovieList(movies, elements.trendingMoviesPreviewList);
}

export { getTrendingMovies };
