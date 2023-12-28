const router = require('express').Router();
const { updateMyCart, getMyCart, getMyCartDetailed } = require('../controllers/cart.controller.js');
const { checkEmail, checkPassword, checkAuth } = require('../middleware/index.js');


//router.get('/', getCarts)
//router.post('/', createCart)

//router.put('/:id', updateCart)
//router.get('/:id', getCart)

router.get('/myCart', checkAuth, getMyCart)
router.get('/myCartDetailed', checkAuth, getMyCartDetailed)
router.put('/myCart', checkAuth, updateMyCart)

module.exports = router