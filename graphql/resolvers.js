import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: getMovies,
    movie: getMovie,
    suggestions: getSuggestions,
  },
};

export default resolvers;
