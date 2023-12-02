import { API } from "./AxiosAPIRequest.js";
import { elements } from "../handleNavigation/nodes.js";

async function getTrendingMovies() {
  const { data } = await API("trending/movie/day");

  const movies = data.results;

  const trendingPreviewMoviesContainer = elements.trendingMoviesPreviewList;
  trendingPreviewMoviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    );

    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
  });
}

export { getTrendingMovies };
