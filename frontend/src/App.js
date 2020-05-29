import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../src/sass/App.scss";
import { useSelector, useDispatch } from "react-redux";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import MoviesList from "./components/MoviesList/MoviesList";
import GenreFilter from "./components/GenreFilter/GenreFilter";
import SearchBar from "./components/SearchBar/SearchBar";
import SpinnerLoader from "./components/SpinnerLoader/SpinnerLoader";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  const isOnLoading = () => {
    if (isLoading) {
      setTimeout(() => {
        dispatch({ type: "TOGGLE_LOADING", payload: false });
      }, 3000);
    }
  };

  useEffect(isOnLoading, [isLoading]);

  return (
    <div className="App">
      <Switch>
        <Route
          path="/genre=:genre"
          render={() => (
            <div className="App-genre">
              {isLoading ? <SpinnerLoader /> : <MoviesList />}
            </div>
          )}
        />
        <Route
          path="/"
          render={() => (
            <div className="App-complete">
              <NewMovieForm />
              <GenreFilter />
              <SearchBar />
              {isLoading ? <SpinnerLoader /> : <MoviesList />}
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
