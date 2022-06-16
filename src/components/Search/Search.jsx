import React from "react";
import styles from "./Search.module.scss";

const { input, btn } = styles;

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        placeholder="Search for Charactrs"
        className={input}
        type="text"
        onChange={(event) => {
          setPageNumber(1);
          setSearch(event.target.value);
        }}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
        }}
        className={`${btn} btn btn-success fs-5`}
      >
        Search
      </button>
    </form>
  );
}

export default Search;