// routes/articles.js
const express = require('express');
const router = express.Router();
const { getAllArticles, createArticle } = require('../controllers/articleController');

router.get('/', getAllArticles);
router.post('/', createArticle);
module.exports = router;