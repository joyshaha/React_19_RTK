const express = require("express");
const router = express.Router();
const Video = require("../models/Video");
// const auth = require("../middleware/auth");

// Get all videos (No role restriction)
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find({}, { __v: 0, createdAt: 0 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new video (No role restriction)
router.post("/", async (req, res) => {
  const { name, url, completed } = req.body;
  try {
    const videos = new Video({
      name,
      url,
      completed,
    });

    await videos.save();
    res.status(201).json({
        message: "Video created",
        videos,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get video by ID (No role restriction)
router.get("/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id, { __v: 0 });
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update video (No role restriction)
router.put("/:id", async (req, res) => {
  try {
    const updates = {};
    if (req.body.name) updates.name = req.body.name;
    if (req.body.url) updates.url = req.body.url;
    if (req.body.completed) updates.completed = req.body.completed;

    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete video (No role restriction)
router.delete("/:id", async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json({ message: "Video deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
