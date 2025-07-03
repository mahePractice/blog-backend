// controllers/tagController.js
const Tag = require('../models/Tag');

exports.getTags = async (req, res) => {
  try {
    const tags = await Tag.find({});
    res.json(tags);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const newTag = new Tag({ name });
    await newTag.save();
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};