import { rootReducer } from "./rootReducer";

describe("rootReducer", () => {
  it("reducer for ADD_MOVIE", () => {
    let state = { movies: [] };
    state = rootReducer(state, {
      type: "ADD_MOVIE",
      payload: { id: 0, name: "Titanic", genres: ["Horror"], isWatched: false },
    });
    expect(state).toEqual({
      movies: [
        { id: 0, name: "Titanic", genres: ["Horror"], isWatched: false },
      ],
      isLoading: true,
    });
  });

  it("reducer for DELETE_MOVIE", () => {
    let state = {
      movies: [
        { id: 0, name: "Titanic", genres: ["Horror"], isWatched: false },
        { id: 1, name: "Torrente", genres: ["Comedy"], isWatched: false },
        { id: 2, name: "Goldeneye", genres: ["Romance"], isWatched: false },
      ],
    };
    state = rootReducer(state, {
      type: "DELETE_MOVIE",
      payload: {
        id: 2,
        name: "Goldeneye",
        genres: ["Romance"],
        isWatched: false,
      },
    });
    expect(state).toEqual({
      movies: [
        { id: 0, name: "Torrente", genres: ["Comedy"], isWatched: false },
        { id: 1, name: "Titanic", genres: ["Horror"], isWatched: false },
      ],
      isLoading: true,
    });
  });

  it("reducer for EDIT_MOVIE", () => {
    let state = {
      movies: [
        { id: 0, name: "Titanic", genres: ["Horror"], isWatched: false },
      ],
    };
    state = rootReducer(state, {
      type: "EDIT_MOVIE",
      payload: { id: 0, name: "Shark", genres: ["Horror"], isWatched: false },
    });
    expect(state).toEqual({
      movies: [{ id: 0, name: "Shark", genres: ["Horror"], isWatched: false }],
    });
  });

  it("reducer for SET_FILTER", () => {
    let state = { filter: "" };
    state = rootReducer(state, {
      type: "SET_FILTER",
      payload: "Horror",
    });
    expect(state).toEqual({
      filter: "Horror",
    });
  });

  it("reducer for SET_SEARCH", () => {
    let state = { search: "" };
    state = rootReducer(state, {
      type: "SET_SEARCH",
      payload: "gladiator",
    });
    expect(state).toEqual({
      search: "gladiator",
      isLoading: true,
    });
  });

  it("reducer for TOGGLE_LOADING", () => {
    let state = { isLoading: false };
    state = rootReducer(state, { type: "TOGGLE_LOADING", payload: true });
    expect(state).toEqual({ isLoading: true });
  });
});
