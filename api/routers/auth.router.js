const router = require('express').Router();
const { login, register } = require('../controllers/auth.controller.js');
const { checkEmail, checkPassword } = require('../middleware/index.js');


router.post('/login', checkEmail, checkPassword, login)
router.post('/register', checkEmail, checkPassword, register)

module.exports = router