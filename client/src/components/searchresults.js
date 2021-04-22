import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SearchResults(props) {
  
  console.log(props.search)

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (props.search === "") {
      return
    }
    API.ping(props.search).then((res) => {
      if (res.totalitems === 0) {
        throw new Error("No Books found.");
      }
      setResults(res.items);
    });
  }, [props.search]);

  console.log(results)

  return (
    <div className="container">
      <div className="row">
        <div className="card col-lg">
          <h1 className="display-4 text-center">Results</h1>
          <ul className="list-group">
            {results.map((books, index) => (
              <li className="list-group-item" key={index}>
                <div
                  className="card text-white bg-dark mb-3"
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={books.volumeInfo.imageLinks.thumbnail} alt="" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{books.volumeInfo.title}</h5>
                        <p className="card-text">
                          <small className="text-muted">
                            {books.volumeInfo.authors}
                          </small>
                        </p>
                        <p className="card-text">
                          {books.volumeInfo.description}
                        </p>
                        <a
                          className="btn btn-light"
                          href={books.volumeInfo.infoLink}
                        >
                          View
                        </a>
                        <button
                          type="button"
                          className="btn btn-light"
                          key={index}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
