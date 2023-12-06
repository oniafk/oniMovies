import { API } from "./AxiosAPIRequest.js";
import { elements } from "../handleNavigation/nodes.js";
import { renderCategoryList } from "./renderCategoryList.js";

async function getCategoriesMoviesPreview() {
  const { data } = await API("genre/movie/list");

  const categories = data.genres;

  renderCategoryList(categories, elements.categoriesPreviewList);
}

export { getCategoriesMoviesPreview };
