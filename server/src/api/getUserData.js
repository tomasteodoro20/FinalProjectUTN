const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/userProfile/:email", async (req, res) => {
  const { email } = req.params;  

  console.log(email)

  const userProfile = await User.find({"email" : email})
  .catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ message: "Error en la busqueda" });
    });

    if (userProfile)
    res.json(userProfile);;
});

module.exports = router;
