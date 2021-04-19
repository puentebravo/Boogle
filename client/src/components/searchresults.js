import React from "react";

function SearchResults(props) {
  const results = props.results;
  console.log(results);

  return (
    <div className="container">
      <div className="row">
        <div className="card col-lg">
          <h1 className="display-4">Results</h1>
          <ul className="list-group">
            {results.map((books, index) => (
              <li className="list-group-item" key={index}>
                <div
                  className="card text-white bg-dark mb-3"
                  style="max-width: 540px;"
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={books.items.volumeInfo.imageLinks.thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          {books.items.volumeInfo.title}
                        </h5>
                        <p className="card-text">
                          <small className="text-muted">
                            {books.items.volumeInfo.authors}
                          </small>
                        </p>
                        <p className="card-text">
                          {books.items.volumeInfo.description}
                        </p>
                        <a
                          className="btn btn-light"
                          href={books.items.volumeInfo.infoLink}
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
