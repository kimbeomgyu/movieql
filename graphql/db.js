import axios from "axios";
const API_URL = "https://yts.am/api/v2";

const Axios = axios.create({ baseURL: API_URL });

export function getMovies(_, { limit = 20, page = 1 }) {
  const REQUEST_URL = `/list_movies.json?limit=${limit}&page=${page}`;
  return Axios.get(REQUEST_URL)
    .then((res) => res.data)
    .then(({ data }) => data.movies);
}

export function getMovie(_, { id }) {
  const REQUEST_URL = `/movie_details.json?movie_id=${id}`;
  return Axios.get(REQUEST_URL)
    .then((res) => res.data)
    .then(({ data }) => data.movie);
}
