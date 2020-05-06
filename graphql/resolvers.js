import { getMovies, getMovie } from "./db";

const resolvers = {
  Query: {
    movies: getMovies,
    movie: getMovie,
  },
};

export default resolvers;
