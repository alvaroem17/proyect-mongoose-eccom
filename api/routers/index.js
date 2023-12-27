const router = require("express").Router()

const products = require("./products.router.js");
const carts = require("./carts.router.js")
const users = require("./users.router.js")

router.use("/auth", require("./auth.router.js"));
router.use("/products", products);
router.use("/carts", carts);
//router.use("/users", users);

module.exports = router;
