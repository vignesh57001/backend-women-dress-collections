const express = require("express");
const router = express.Router();
const Dress = require("../modelss/dressModel");

router.get("/getalldresses", async (req, res) => {
  try {
    const dresses = await Dress.find({});
    res.send(dresses);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
