const Cart = require("../models/cart.model");

const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find({}, { __v: 0 });
    res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.id }, { __v: 0 });
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateMyCart = async (req, res) => {
  try {
    const cart = await Cart.updateOne(
      { userId: res.locals.user._id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getMyCart = async (req, res) => {
  try {
    const cart = await Cart.findOne(
      { userId: res.locals.user._id },
      { __v: 0 }
    );
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getMyCartDetailed = async (req, res) => {
  try {
    const cart = await Cart.findOne(
      { userId: res.locals.user._id },
      { __v: 0 }
    ).populate("products._id",{_id:1, title:1, price:1, thumbnail:1});
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCarts,
  getCart,
  createCart,
  updateCart,
  updateMyCart,
  getMyCart,
  getMyCartDetailed,
};
