"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovies = getMovies;
exports.getMovie = getMovie;
exports.getSuggestions = getSuggestions;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = "https://yts.am/api/v2";

var Axios = _axios2.default.create({ baseURL: API_URL });

function getMovies(_, _ref) {
  var limit = _ref.limit,
      page = _ref.page,
      minimum_rating = _ref.rating;

  return Axios.get("/list_movies.json", {
    params: { limit: limit, minimum_rating: minimum_rating, page: page }
  }).then(function (_ref2) {
    var data = _ref2.data;
    return data;
  }).then(function (_ref3) {
    var data = _ref3.data;
    return data.movies;
  });
}

function getMovie(_, _ref4) {
  var id = _ref4.id;

  return Axios.get("/movie_details.json", { params: { movie_id: id } }).then(function (res) {
    return res.data;
  }).then(function (_ref5) {
    var data = _ref5.data;
    return data.movie;
  });
}

function getSuggestions(_, _ref6) {
  var id = _ref6.id;

  return Axios.get("movie_suggestions.json", { params: { movie_id: id } }).then(function (_ref7) {
    var data = _ref7.data;
    return data;
  }).then(function (_ref8) {
    var data = _ref8.data;
    return data.movies;
  });
}