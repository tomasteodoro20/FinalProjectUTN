const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/deleteWishlistItem/:email/:slug", async (req, res) => {
  const { slug, email } = req.params;  

  const removeGame = await User.updateOne({"email" : email }, { $pull: { wishlist: { slug: slug } } },
  {multi: true})
  .catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ message: "No se pudo eliminar el juego" });
    });

    if (removeGame)
    res.json({message: "El juego se eliminó corectamente"});;
});

module.exports = router;
