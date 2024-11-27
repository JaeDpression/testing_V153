const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  // Return a list of users
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ]);
});

router.get('/users/:id', (req, res) => {
  // Return a single user by ID
  const userId = req.params.id;
  res.json({ id: userId, name: `User  ${userId}` });
});

module.exports = router;

router.get('/api/data', (req, res) => {
    // Return some sample data
    res.json({
      message: 'Hello from the backend!'
    });
  });