const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// const auth = require("../middleware/auth");

// Get all posts (No role restriction)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({}, { __v: 0, createdAt: 0 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new post (No role restriction)
router.post("/", async (req, res) => {
  const { title, type, content } = req.body;
  try {
    const post = new Post({
      title,
      type,
      content,
    });

    await post.save();
    res.status(201).json({
        message: "Post created",
        post,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get post by ID (No role restriction)
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id, { __v: 0 });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update post (No role restriction)
router.put("/:id", async (req, res) => {
  try {
    const updates = {};
    if (req.body.title) updates.title = req.body.title;
    if (req.body.type) updates.type = req.body.type;
    if (req.body.content) updates.content = req.body.content;

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete post (No role restriction)
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
