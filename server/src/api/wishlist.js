const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/wishlist/:email", async (req, res) => {
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
  // const existingGame = await User.findOne({ $eq: [ "slug" , slug ] } );
  // if (existingGame !== null) {
  //   res.status(409).json({ message: "El juego ya se encuentra en tu lista de deseados" });
    
  // }
  // console.log(existingGame)

  // if (existingGame === null) {
  // }
  console.log(email)

  const newListedGame = await User.updateOne({"email" : email }, {$push: req.body
    }, {multi: true}).catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ message: "No se pudo agregar el juego" });
    });

    if (newListedGame)
    { return res.json({ message: "El juego fue agregado a tu lista de deseados" })};;

//   const savedWishlist = await newListedGame.update().catch((err) => {
//     console.log("Error: ", err);
//     res.status(500).json({ message: "No se pudo agregar el juego" });
//   });

//   if (savedWishlist) res.json({ message: "El juego fue agregado a tu lista de deseados" });
});

module.exports = router;
