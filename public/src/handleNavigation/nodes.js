const elements = {
  headerSection: document.querySelector("#header"),
  trendingPreviewSection: document.querySelector("#trendingPreview"),
  categoriesPreviewSection: document.querySelector("#categoriesPreview"),
  genericSection: document.querySelector("#genericList"),
  movieDetailSection: document.querySelector("#movieDetail"),
  searchForm: document.querySelector("#searchForm"),
  trendingMoviesPreviewList: document.querySelector(
    ".trendingPreview-movieList"
  ),
  categoriesPreviewList: document.querySelector(".categoriesPreview-list"),
  movieDetailCategoriesList: document.querySelector(
    "#movieDetail .categories-list"
  ),
  relatedMoviesContainer: document.querySelector(
    ".relatedMovies-scrollContainer"
  ),
  headerTitle: document.querySelector(".header-title"),
  arrowBtn: document.querySelector(".header-arrow"),
  headerCategoryTitle: document.querySelector(".header-title--categoryView"),
  searchFormInput: document.querySelector("#searchForm input"),
  searchFormBtn: document.querySelector("#searchBtn"),
  trendingBtn: document.querySelector(".trendingPreview-btn"),
  movieDetailTitle: document.querySelector(".movieDetail-title"),
  movieDetailDescription: document.querySelector(".movieDetail-description"),
  movieDetailScore: document.querySelector(".movieDetail-score"),
};

export { elements };
