const express = require('express');
const router = express.Router();

// Dummy database for demonstration (replace with your database code)
const ideas = [];

// POST route to save an idea
router.post('/', (req, res) => {
  const { idea } = req.body;
  if (idea) {
    // Store the idea in the database (replace with your database logic)
    ideas.push(idea);
    res.status(201).json({ message: 'Idea saved successfully' });
  } else {
    res.status(400).json({ error: 'Idea is required' });
  }
});

module.exports = router;
