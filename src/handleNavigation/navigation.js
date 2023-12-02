import { trendsPage } from "./navigationTrends.js";
import { searchPage } from "./navigationSearch.js";
import { moviePage } from "./navigationMovie.js";
import { HomePage } from "./navigationHome.js";
import { categoriesPage } from "./navigationCategory.js";

function navigator() {
  console.log({ location });

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

  location.hash;
}

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

export { navigator };
