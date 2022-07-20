const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/userWishlist/:email", async (req, res) => {
  const { email } = req.params;  
  
  const userWishlist = await User.find({"email" : email}, {wishlist: 1})
  .catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ message: "No hay contenido" });
    });

    if (userWishlist)
    res.json(userWishlist);
    
});

module.exports = router;
