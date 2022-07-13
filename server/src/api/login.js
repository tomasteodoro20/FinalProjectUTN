const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userWithEmail = await User.findOne({ email }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Los datos son incorrectos" });

  if (userWithEmail.password !== password)
    return res
      .status(400)
      .json({ message: "Los datos son incorrectos" });

});

module.exports = router;
