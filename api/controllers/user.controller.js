const User = require("../models/user.model");
const Cart = require("../models/cart.model");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const cart = new Cart({
      userId: user._id,
      products: [],
    })
    await cart.save();
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { getUsers, createUser };
