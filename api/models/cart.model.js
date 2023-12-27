const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    products: [{
        _id: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

const Cart = model("Cart", cartSchema);

module.exports = Cart;