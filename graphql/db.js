let Movies = [
  { id: 1, name: "Star Wars", score: 10 },
  { id: 2, name: "Avengers", score: 5 },
  { id: 3, name: "The Godfather", score: 9 },
  { id: 4, name: "Logan", score: 8 },
  { id: 5, name: "Spiderman", score: 6 },
  { id: 6, name: "iron man", score: 7 },
  { id: 7, name: "Bad Guys", score: 8 },
  { id: 8, name: "Parasite", score: 9 },
];

export function getMovies() {
  return Movies;
}

export function getMovie(_, { id }) {
  return Movies.filter(({ id: uid }) => uid === id)[0];
}
