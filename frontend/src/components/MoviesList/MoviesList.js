import React, { useEffect } from "react";
import "./MoviesList.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import MovieRow from "./MovieRow/MovieRow";

const MoviesList = () => {
  const dispatch = useDispatch();

  const { genre } = useParams();
  const movies = useSelector((state) => state.movies);
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search);
  const sortedMovies = movies.sort((a, b) => (a.id < b.id ? -1 : 1));

  useEffect(() => {
    if (genre) {
      dispatch({ type: "SET_FILTER", payload: genre });
      if (genre !== filter) {
        dispatch({ type: "TOGGLE_LOADING", payload: true });
      }
    } else {
      dispatch({ type: "SET_FILTER", payload: null });
  
    }
  }, [genre]);
  const sortedWatchedMovies = sortedMovies.sort((a, b) => {
    if (a.isWatched && !b.isWatched) {
      return 1;
    } else if (!a.isWatched && b.isWatched) {
      return -1;
    } else {
      return 0;
    }
  });

  const filteredMovies = filter
    ? sortedWatchedMovies.filter((movie) => movie.genres.includes(filter))
    : sortedWatchedMovies;
  const searchedMovies = search
    ? filteredMovies.filter((movie) => movie.name.includes(search))
    : filteredMovies;
  return (
    <div className="movies-list">
      {searchedMovies.map((movie, i) => (
        <MovieRow key={i} movie={movie}></MovieRow>
      ))}
    </div>
  );
};

export default MoviesList;
