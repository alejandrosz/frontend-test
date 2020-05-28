export const addMoviesAction = (movies, newMovie) => {
  newMovie.id = movies.length;
  return [...movies, newMovie];
};

export const deleteMoviesAction = (movies, deletedMovie) => {
  const remainingMovies = movies.filter((movie) => movie !== deletedMovie);
  const updatedMovies = remainingMovies
    .sort((a, b) => a.id < b.id)
    .map((movie, i) => ({ ...movie, id: i }));
  return updatedMovies;
};

export const setFilterAction = (filter) => filter;
export const setSearchAction = (search) => search;

export const editMoviesAction = (movies, updatedMovie) => {
  const updatedMovies = movies.map((movie) => {
    if (movie.id === updatedMovie.id) {
      return updatedMovie;
    } else {
      return movie;
    }
  });
  return updatedMovies;
};