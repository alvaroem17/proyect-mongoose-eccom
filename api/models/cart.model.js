const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [{
        productId: {
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