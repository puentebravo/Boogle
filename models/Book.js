const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
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

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
