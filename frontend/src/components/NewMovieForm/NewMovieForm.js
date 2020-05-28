import React, { useState } from "react";
import "./NewMovieForm.scss";
import { useDispatch } from "react-redux";

const NewMovieForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [genres, setGenres] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let genre = e.target.value;
      let genreCapitalized =
        genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();
      if (!genres.find((genre) => genre === genreCapitalized)) {
        setGenres([...genres, genreCapitalized]);
      }
    }
  };

  const createMovie = () => {
    let movie = { name, genres, isWatched: false };
    if (movie.name) {
      dispatch({ type: "ADD_MOVIE", payload: movie });
    }
  };

  return (
    <div className="new-movie-form">
      <h1>Add movie to watchlist</h1>
      <input
        type="text"
        placeholder="Movie name"
        name="movieName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Movie genre"
        name="movieGenre"
        onKeyDown={handleKeyDown}
      ></input>
      {genres.map((genre, i) => (
        <h1 key={i}>{genre}</h1>
      ))}
      <button onClick={createMovie}>Add</button>
    </div>
  );
};

export default NewMovieForm;
