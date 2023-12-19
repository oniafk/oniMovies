import { API } from "./AxiosAPIRequest.js";
import { elements } from "../handleNavigation/nodes.js";
import { renderMovieList } from "./renderMovieList.js";

async function getSearchMovie(query) {
  const { data } = await API("search/movie", {
    params: {
      query,
    },
  });

  const movies = data.results;

  renderMovieList(movies, elements.genericSection);
}

export { getSearchMovie };
