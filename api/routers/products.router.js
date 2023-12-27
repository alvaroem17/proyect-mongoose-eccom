const router = require('express').Router();
const { getProducts, createProduct, getProduct } = require('../controllers/product.controller.js');

router.get('/', getProducts)
//router.post('/', createProduct);

router.get('/:id', getProduct)


module.exports = router