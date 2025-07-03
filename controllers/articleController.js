// controllers/articleController.js
const Article = require('../models/Article');

exports.getAllArticles = async (req, res) => {
  try {
    const tag = req.query.tag;
    const filter = tag ? { tags: tag } : {};
    const articles = await Article.find(filter).sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const article = new Article({ title, content, tags });
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};