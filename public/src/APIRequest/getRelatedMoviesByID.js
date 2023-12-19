import { API } from "./AxiosAPIRequest.js";
import { elements } from "../handleNavigation/nodes.js";
import { renderMovieList } from "./renderMovieList.js";

async function getRelatedMoviesByID(id) {
  const { data: relatedMovies } = await API(`movie/${id}/similar`);

  renderMovieList(relatedMovies.results, elements.relatedMoviesContainer);
}

export { getRelatedMoviesByID };
