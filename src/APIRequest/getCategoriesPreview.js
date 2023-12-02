import { API } from "./AxiosAPIRequest.js";
import { elements } from "../handleNavigation/nodes.js";

async function getCategoriesMoviesPreview() {
  const { data } = await API("genre/movie/list");

  const categories = data.genres;

  const previewCategoriesContainer = elements.categoriesPreviewList;

  previewCategoriesContainer.innerHTML = "";

  categories.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", `id${category.id}`);
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    previewCategoriesContainer.appendChild(categoryContainer);
  });
}

export { getCategoriesMoviesPreview };
