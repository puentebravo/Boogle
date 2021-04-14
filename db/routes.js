const router = require("express").Router();
const Book = require("../models/Book.js");

router.post("/api/saved", ({ body }, res) => {
  Book.create(body)
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/api/saved", (req, res) => {
  Book.find({})
    .sort({ date: -1 })
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
