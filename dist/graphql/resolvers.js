"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require("./db");

var resolvers = {
  Query: {
    movies: _db.getMovies,
    movie: _db.getMovie,
    suggestions: _db.getSuggestions
  }
};

exports.default = resolvers;