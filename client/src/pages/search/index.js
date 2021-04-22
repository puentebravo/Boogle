import React, { useState } from "react";
import Header from "../../components/header";
import Lead from "../../components/lead";
import SearchBar from "../../components/searchbar";
import SearchResults from "../../components/searchresults";
import Footer from "../../components/footer";
import "./style.css";

function Search() {
  const [search, setSearch] = useState("The Hunt for Red October");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    console.log("Form submitted");
    setSearch(event.target.value);
  };

  return (
    <div>
      <Header />
      <Lead />
      <SearchBar
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        query={search}
      />
      <SearchResults search={search} />
      <Footer />
    </div>
  );
}

export default Search;
