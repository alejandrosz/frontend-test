import { createStore } from "redux";
import {
  deleteMoviesAction,
  addMoviesAction,
  setFilterAction,
  setSearchAction,
  editMoviesAction,
} from "./reducerFunctions";

const initialMovies = [
  { id: 0, name: "Titanic", genres: ["Horror"], isWatched: false },
  { id: 1, name: "Torrente", genres: ["Comedy"], isWatched: false },
  { id: 2, name: "Goldeneye", genres: ["Romance"], isWatched: false },
];
const initialState = {
  movies: initialMovies,
  isLoading: false,
  filter: null,
  search: null,
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_MOVIE":
      const addedMovies = addMoviesAction(state.movies, payload);
      return { ...state, movies: addedMovies, isLoading: true };
    case "DELETE_MOVIE":
      const remainingMovies = deleteMoviesAction(state.movies, payload);
      return { ...state, movies: remainingMovies, isLoading: true };
    case "EDIT_MOVIE":
      const editedMovies = editMoviesAction(state.movies, payload);
      return { ...state, movies: editedMovies };
    case "SET_FILTER":
      const filter = setFilterAction(payload);
      return { ...state, filter };
    case "SET_SEARCH":
      const search = setSearchAction(payload);
      return { ...state, search, isLoading: true };
    case "TOGGLE_LOADING":
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}

export const store = createStore(rootReducer);
