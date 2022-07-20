const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/wishlist/:email", async (req, res) => {
  const { email } = req.params;

  const newListedGame = await User.updateOne({"email" : email }, {$push: req.body
    }, {multi: true}).catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ message: "No se pudo agregar el juego" });
    });

    if (newListedGame)
    { return res.json({ message: "El juego fue agregado a tu lista de deseados" })};;

});

module.exports = router;
