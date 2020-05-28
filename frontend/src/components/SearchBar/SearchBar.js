import React from "react";
import "./SearchBar.scss";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "SET_SEARCH", payload: e.target.value });
    }
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

export default SearchBar;
