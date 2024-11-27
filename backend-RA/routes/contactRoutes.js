// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');

router.post('/submit', async (req, res) => {
  try {
    const { name, email, issue, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      issueType: issue,
      message
    });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting form', error: error.message });
  }
});

module.exports = router;