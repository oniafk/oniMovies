import { trendsPage } from "./navigationTrends.js";
import { searchPage } from "./navigationSearch.js";
import { moviePage } from "./navigationMovie.js";
import { HomePage } from "./navigationHome.js";
import { categoriesPage } from "./navigationCategory.js";

import { elements } from "./nodes.js";

function navigator() {
  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    moviePage();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else {
    HomePage();
  }
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  4;
}

elements.searchFormBtn.addEventListener("click", () => {
  location.hash = "#search=" + elements.searchFormInput.value;
});

elements.trendingBtn.addEventListener("click", () => {
  location.hash = "#trends";
});

elements.arrowBtn.addEventListener("click", () => {
  history.back();
});

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

export { navigator };
