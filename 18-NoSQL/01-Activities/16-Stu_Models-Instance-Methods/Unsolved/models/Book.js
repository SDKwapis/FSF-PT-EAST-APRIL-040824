const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    price: Number,
    lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    const discount = this.price * .5
    console.log(discount);
    console.log(this.title);
};
// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);
// TODO: Create a new instance of the model
const jurassicPark = new Book({ 
    title: 'Jurassic Park', author: 'Michael Crichton', price: 29.99
});
// TODO: Call the custom instance method on the instance
jurassicPark.getDiscount();

module.exports = Book;
