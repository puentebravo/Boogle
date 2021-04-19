import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Header from "../../components/header";
import Lead from "../../components/lead";
import SearchBar from "../../components/searchbar";
import SearchResults from "../../components/searchresults";
import Footer from "../../components/footer";
import "./search.css";

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }
    API.ping(search).then((res) => {
      if (res.items.length === 0 || !res.items) {
        throw new Error("No Books found.");
      }
      setResults(res.items);
    });
  }, [search]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setSearch("");
    }
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
      <SearchResults results={results} />
      <Footer />
    </div>
  );
}

export default Search;
