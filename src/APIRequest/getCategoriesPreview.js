import { API } from "./AxiosAPIRequest.js";
import { elements } from "../handleNavigation/nodes.js";

async function getCategoriesMoviesPreview() {
  const { data } = await API("genre/movie/list");

  const categories = data.genres;

  elements.categoriesPreviewList.innerHTML = "";

  categories.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", `id${category.id}`);
    categoryTitle.addEventListener("click", () => {
      location.hash = `#category=${category.id}-${category.name}`;
    });
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    elements.categoriesPreviewList.appendChild(categoryContainer);
  });
}

export { getCategoriesMoviesPreview };
