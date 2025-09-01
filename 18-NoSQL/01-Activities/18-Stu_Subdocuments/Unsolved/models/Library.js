const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

const librarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  book: [bookSchema],
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model("Library", librarySchema);
// TODO: Create a new instance of the model including the subdocuments

const sequel = [
  { title: "The Lost World", price: 30 },
  { title: "Chris Pratt Reboot", price: 5000 },
];

Library.create({ title: "Dinos", book: sequel })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

module.exports = Library;
