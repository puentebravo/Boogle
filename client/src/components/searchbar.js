import React from "react";

function SearchBar(props) {
  return (
    <div className="row justify-content-center" id="searchB">
      <form className="d-flex" id="searchForm">
        <input
          className="form-control me-2"
          value={props.query}
          onChange={props.handleInputChange}
          type="search"
          name="search"
          placeholder="Search Books"
          aria-label="Search"
        />
      </form>
      <button type="submit" className="btn btn-danger" form="searchForm" onClick={props.handleFormSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
