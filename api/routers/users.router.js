const router = require('express').Router();
const { getUsers, createUser } = require('../controllers/user.controller.js');

router.get('/', getUsers)

router.post('/', createUser)

module.exports = router