const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({},{__v:0});
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id,{__v:0});
    res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { getProducts, getProduct, createProduct};
