import React, { useEffect, useState } from "react";
import API from "../utils/API";

function SearchResults() {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    API.ping().then((res) => {
      setSearch(res.data.results);
    });
  }, []);

  return (
      <div className="row">
        
      </div>
  );
}

export default SearchResults;