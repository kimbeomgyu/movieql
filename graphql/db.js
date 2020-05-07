import axios from "axios";
const API_URL = "https://yts.am/api/v2";

const Axios = axios.create({ baseURL: API_URL });

export function getMovies(_, { limit, page, rating: minimum_rating }) {
  return Axios.get("/list_movies.json", {
    params: { limit, minimum_rating, page },
  })
    .then(({ data }) => data)
    .then(({ data }) => data.movies);
}

export function getMovie(_, { id }) {
  return Axios.get("/movie_details.json", { params: { movie_id: id } })
    .then((res) => res.data)
    .then(({ data }) => data.movie);
}

export function getSuggestions(_, { id }) {
  return Axios.get("movie_suggestions.json", { params: { movie_id: id } })
    .then(({ data }) => data)
    .then(({ data }) => data.movies);
}
