const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.delete("/deleteAccount/:email", async (req, res) => {
  const { email } = req.params;  

  console.log(email)

  const deleteProfile = await User.findOneAndDelete({"email" : email})
  .catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ message: "Error durante el proceso" });
    });

    if (deleteProfile)
    res.json(deleteProfile);;
});

module.exports = router;
