const router = require('express').Router();
const { getCarts } = require('../controllers/cart.controller.js');


router.get('/', getCarts)

module.exports = router