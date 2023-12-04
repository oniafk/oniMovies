import { elements } from "../handleNavigation/nodes.js";
import { API } from "./AxiosAPIRequest.js";
import { renderMovieList } from "./renderMovieList.js";

async function getTrendingMoviesList() {
  const { data } = await API("trending/movie/week");

  const movies = data.results;

  renderMovieList(movies, elements.genericSection);
}

export { getTrendingMoviesList };
