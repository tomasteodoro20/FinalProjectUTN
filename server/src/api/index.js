const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const wishlistApi = require("./wishlist");


const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(wishlistApi);

module.exports = router;
