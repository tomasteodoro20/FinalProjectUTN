const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/userWishlist/:email", async (req, res) => {
  const { email } = req.params;  
//   const wishlist = {name, background_image, description, slug};

//   const alreadyExistsUser = await User.findOne({ wishlist }).catch(
//     (err) => {
//       console.log("Error: ", err);
//     }
//   );

//   if (alreadyExistsUser) {
//     return res.status(409).json({ message: "El email ingresado ya se encuentra registrado" });
//   }
console.log(email)

  const userWishlist = await User.find({"email" : email}, {wishlist: 1})
  .catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ message: "No hay contenido" });
    });

    if (userWishlist)
    res.json(userWishlist);;
//   const savedWishlist = await newListedGame.update().catch((err) => {
//     console.log("Error: ", err);
//     res.status(500).json({ message: "No se pudo agregar el juego" });
//   });

//   if (savedWishlist) res.json({ message: "El juego fue agregado a tu lista de deseados" });
});

module.exports = router;
