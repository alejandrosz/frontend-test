import React from "react";
import { shallow, mount } from "enzyme";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
const mockStore = configureStore();

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

let store, wrapper;

describe("App", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  });

  it("renders <h1>Movie Watchlist</h1>", () => {
    expect(wrapper.contains(<h1 className="title">Movie Watchlist</h1>)).toBe(
      true
    );
  });
});
