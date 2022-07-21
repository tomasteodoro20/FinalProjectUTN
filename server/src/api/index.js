const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const wishlistApi = require("./wishlist");
const getWishlistApi = require("./getWishlist")
const getUserProfile = require("./getUserData")
const deleteAccount = require("./deleteAccount");
const deleteWishlistItem = require("./deleteWishlistItem");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(wishlistApi);
router.use(getWishlistApi);
router.use(getUserProfile);
router.use(deleteAccount);
router.use(deleteWishlistItem)

module.exports = router;