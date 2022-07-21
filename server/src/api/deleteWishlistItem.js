const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/deleteWishlistItem/:id", async (req, res) => {
  const { id } = req.params;  

  console.log(id)

  const deleteProfile = await User.findByIdAndDelete({"_id" : id})
  .catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ message: "Error durante el proceso" });
    });

    if (deleteProfile)
    res.json(deleteProfile);;
});

module.exports = router;
