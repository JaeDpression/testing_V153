// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup); // For signing up
router.post('/signin', authController.login); // For signing in

module.exports = router;