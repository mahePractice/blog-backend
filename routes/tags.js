// routes/tags.js
const express = require('express');
const router = express.Router();
const { getTags, createTag } = require('../controllers/tagController');

router.get('/', getTags);
router.post('/', createTag);
module.exports = router;