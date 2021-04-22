import React from "react";

function SearchBar(props) {
  return (
    <div className="row justify-content-center" id="searchB">
      <form className="d-flex">
        <input
          value={props.query}
          onSubmit={props.handleInputChange}
          className="form-control me-2"
          type="search"
          placeholder="Search Books"
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
