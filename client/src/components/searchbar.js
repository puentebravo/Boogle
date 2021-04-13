import React from "react";

function SearchBar(props) {
  return (
    <div className="row justify-content-center">
      <form className="d-flex">
        <input
          value={props.filter}
          onChange={props.handleInputChange}
          className="form-control me-2"
          type="search"
          placeholder="Search Directory"
          aria-label="Search"
        />
      </form>
      <button type="submit" className="btn btn-danger">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
