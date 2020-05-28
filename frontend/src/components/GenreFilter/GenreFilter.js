import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./GenreFilter.scss";

const GenreFilter = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    Horror: false,
    Romance: false,
    Comedy: false,
  });

  const handleChange = (e) => {
    dispatch({ type: "SET_FILTER", payload: e.target.value });

    const changedFilter = {
      Horror: false,
      Romance: false,
      Comedy: false,
    };
    changedFilter[e.target.value] = true;
    setFilter(changedFilter);
  };

  const resetFilter = () => {
    dispatch({ type: "SET_FILTER", payload: null });

    setFilter({
      Horror: false,
      Romance: false,
      Comedy: false,
    });
  };

  return (
    <div className="genre-filter">
      <input
        type="Radio"
        name="genre-check"
        value="Horror"
        checked={filter.Horror}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="genre-check">Horror</label>
      <input
        type="Radio"
        name="genre-check"
        value="Romance"
        checked={filter.Romance}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="genre-check">Romance</label>
      <input
        type="Radio"
        name="genre-check"
        value="Comedy"
        checked={filter.Comedy}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="genre-check">Comedy</label>
      <button onClick={() => resetFilter()}>Reset</button>
    </div>
  );
};

export default GenreFilter;
