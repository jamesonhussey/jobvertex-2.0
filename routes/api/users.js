const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login)

module.exports = router;