import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json";

export function getMovies(limit, rating) {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
}
