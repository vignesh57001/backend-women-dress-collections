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

router.post("/adddress", async (req, res) => {
  const dress = req.body.dress;

  try {
    const newdress = new Dress({
      name: dress.name,
      img: dress.img,
      sizes: ["Small", "Medium", "Large", "ExtraLarge"],
      description: dress.description,
      category: dress.category,
      prices: [dress.prices],
    });
    await newdress.save();
    res.send("New Dress Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getdressbyid", async (req, res) => {
  const dressid = req.body.dressid;

  try {
    const dress = await Dress.findOne({ _id: dressid });
    res.send(dress);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/editdress", async (req, res) => {
  const editeddress = req.body.editeddress;

  try {
    const dress = await Dress.findOne({ _id: editeddress._id });

    (dress.name = editeddress.name),
      (dress.description = editeddress.description),
      (dress.image = editeddress.image),
      (dress.category = editeddress.category),
      (dress.prices = [editeddress.prices]);

    await dress.save();

    res.send("Dress Details Edited successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deletedress", async (req, res) => {
  const dressid = req.body.dressid;

  try {
    await Dress.findOneAndDelete({ _id: dressid });
    res.send("Dress Deleted successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
