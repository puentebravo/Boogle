import React, { useState } from "react";
import Header from "../../components/header";
import Lead from "../../components/lead";
import SearchBar from "../../components/searchbar";
import SearchResults from "../../components/searchresults";
import Footer from "../../components/footer";
import "./style.css";

function Search() {
  const [search, setSearch] = useState("");

  console.log(search)

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
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
      <SearchResults search={search}/>
      <Footer />
    </div>
  );
}

export default Search;
