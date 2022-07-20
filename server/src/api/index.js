const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const wishlistApi = require("./wishlist");
const getWishlistApi = require("./getWishlist")
const getUserProfile = require("./getUserData")
const deleteAccount = require("./deleteAccount")

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(wishlistApi);
router.use(getWishlistApi);
router.use(getUserProfile);
router.use(deleteAccount);

module.exports = router;