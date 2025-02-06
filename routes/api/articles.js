const express = require('express')
const router = express.Router()
const articlesCtrl = require('../../controllers/api/articles')

// GET /api/articles
router.get('/', articlesCtrl.index)

module.exports = router