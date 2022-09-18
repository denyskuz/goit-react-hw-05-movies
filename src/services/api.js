const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "e704dedb4527dcb2d58f4f28374639e6";

async function errorHandle(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok  
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
  return errorHandle(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
}

export function fetchSearchQuery(searchQuery) {
  return errorHandle(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchMovieById(id) {
  return errorHandle(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCast(id) {
  return errorHandle(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(id) {
  return errorHandle(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
}