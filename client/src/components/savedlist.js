import React, { useEffect, useState } from "react";
import db from "../utils/db";

function SavedList() {
  const [saved, setSaved] = useState([]);

  const deleteSaved = (id) => {
    db.delete(id);
  };

  useEffect(() => {
    db.getList().then((res) => {
      setSaved(res.data);
    });
  }, [deleteSaved]);

  return (
    <div className="container">
      <div className="row">
        <div className="card col-lg">
          <h1 className="display-4 text-center">Saved books</h1>
          <ul className="list-group">
            {saved.map((books) => (
              <li className="list-group-item" key={books._id}>
                <div className="card text-white bg-dark mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={books.imgSrc} alt={books.title} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{books.title}</h5>
                        <p className="card-text">
                          <small className="text-muted">{books.authors}</small>
                        </p>
                        <p className="card-text">{books.description}</p>
                        <a className="btn btn-light" href={books.link}>
                          View
                        </a>
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => deleteSaved(books._id)}
                        >
                          Delete
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

export default SavedList;
