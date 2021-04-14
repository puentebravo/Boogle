const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  authors: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imgSrc: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
