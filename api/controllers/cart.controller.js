const Cart = require("../models/cart.model");

const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find({});
    res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = { getCarts };
