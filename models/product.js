const mongoose = require('mongoose');
const Review = require('./review');

// Everything in Mongoose starts with Schema.

// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection

// Permitted Schema Types are :

/*
  * String
  * Number
  * Date
  * Boolean
  * ObjectId
  * Array
  * Decimal128
  * Map
  * Mixed


*/
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
    },
    desc: {
        type: String
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]

});

// ObjectId is a special type typically used for unique identifiers

const Product = mongoose.model('Product', productSchema);
module.exports = Product;