import React, { useState } from "react";
import "./MovieRow.scss";
import { useDispatch } from "react-redux";

const MovieRow = ({ movie, movie: { name, genres, isWatched } }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const dispatch = useDispatch();

  const deleteMovie = () => {
    dispatch({ type: "DELETE_MOVIE", payload: movie });
  };

  const editMovie = () => {
    setIsEditing(!isEditing);
    const updatedMovie = { ...movie, name: newName };
    dispatch({ type: "EDIT_MOVIE", payload: updatedMovie });
  };

  const toggleWatched = () => {
    const updatedMovie = { ...movie, isWatched: !isWatched };
    dispatch({ type: "EDIT_MOVIE", payload: updatedMovie });
  };

  return (
    <div className="movie-row">
      {!isEditing ? (
        <h1>{name}</h1>
      ) : (
        <div className="movie-row-edit">
          <input
            type="text"
            placeHolder="edit name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={() => editMovie()}>save edit</button>
        </div>
      )}
      <div className="movie-row-genres">
        {genres.map((genre, i) => (
          <h1 key={i}>{genre}</h1>
        ))}
      </div>
      <label>
        <input
          type="checkbox"
          checked={movie.isWatched}
          onChange={() => toggleWatched()}
        />{" "}
        Watched
      </label>
      <button onClick={deleteMovie}>Delete</button>
      {!isEditing ? (
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      ) : null}
    </div>
  );
};

export default MovieRow;
