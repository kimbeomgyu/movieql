import { getMovie, getMovies, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: getMovies,
    movie: getMovie,
  },
  Mutation: {
    addMovie,
    deleteMovie,
  },
};

export default resolvers;
