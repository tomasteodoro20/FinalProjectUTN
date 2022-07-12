const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;
  const data = {username, firstname, lastname, email, password};

  const alreadyExistsUser = await User.findOne({ email }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "El email ingresado ya se encuentra registrado" });
  }

  const newUser = new User(data);
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ message: "No se puede registrar en este momento" });
  });

  if (savedUser) res.json({ message: "¡Gracias por registrarte!" });
});

module.exports = router;
