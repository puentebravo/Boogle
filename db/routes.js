const router = require("express").Router();
const Book = require("../models/Book.js");

router.post("/api/saved", (req, res) => {
  Book.create(req.body)
    .then((dbBook) => {
      res.json(dbBook);
      console.log("Record Created.")
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

router.delete("/api/saved/:id", (req, res) => {
  Book.deleteOne({ _id: req.params.id }).then((dbBook) => res.json(dbBook));
});
module.exports = router;
