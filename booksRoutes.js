// booksRoutes.js
const express = require('express');
const router = express.Router();
const db = require('./db'); // Import the database connection module

// Example endpoint to get all books
router.get('/books', async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM books');
    res.header('Content-Type', 'application/json'); // Set Content-Type header
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Add more routes for CRUD operations

module.exports = router;



