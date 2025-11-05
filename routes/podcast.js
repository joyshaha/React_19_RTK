const express = require('express');
const router = express.Router();
const Podcast = require('../models/Podcast');

// Get all podcasts (No role restriction)
router.get('/', async (req, res) => {
  try {
    const podcasts = await Podcast.find({}, { __v: 0, createdAt: 0 });
    res.json(podcasts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new podcast (No role restriction)
router.post('/', async (req, res) => {
  const { title, description, url, episodes } = req.body;
  try {
    const podcast = new Podcast({
      title,
      description,
      url,
      episodes,
    });

    await podcast.save();
    res.status(201).json({
      message: 'Podcast created',
      podcast,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get podcast by ID (No role restriction)
router.get('/:id', async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id, { __v: 0 });
    if (!podcast) {
      return res.status(404).json({ message: 'Podcast not found' });
    }
    res.json(podcast);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update podcast (No role restriction)
router.put('/:id', async (req, res) => {
  try {
    const updates = {};
    if (req.body.title) updates.title = req.body.title;
    if (req.body.description) updates.description = req.body.description;
    if (req.body.url) updates.url = req.body.url;
    if (req.body.episodes) updates.episodes = req.body.episodes;

    const podcast = await Podcast.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!podcast) {
      return res.status(404).json({ message: 'Podcast not found' });
    }

    res.json({
      message: 'Podcast updated',
      podcast,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete podcast (No role restriction)
router.delete('/:id', async (req, res) => {
  try {
    const podcast = await Podcast.findByIdAndDelete(req.params.id);
    if (!podcast) {
      return res.status(404).json({ message: 'Podcast not found' });
    }
    res.json({ message: 'Podcast deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
