import { API } from "./AxiosAPIRequest.js";
import { elements } from "../handleNavigation/nodes.js";
import { renderMovieList } from "./renderMovieList.js";

async function getMoviesByCategory(id, categoryName) {
  const { data } = await API("discover/movie", {
    params: {
      with_genres: id,
    },
  });

  const movies = data.results;

  renderMovieList(movies, elements.genericSection);

  elements.headerCategoryTitle.innerHTML = categoryName;
}

export { getMoviesByCategory };
