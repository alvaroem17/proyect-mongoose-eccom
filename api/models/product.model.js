const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    rating: {
        rate:{
            type: Number,
            required: true
        },
        count:{
            type: Number,
            required: true
        }
    },
    thumbnail:{
        type: String,
        default: "https://via.placeholder.com/150"
    }
})

const Product = model("Product", productSchema);

module.exports = Product;