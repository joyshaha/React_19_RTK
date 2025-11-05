const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("first", res);
  try {
    res.status(200).json({ message: "Server is running" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
