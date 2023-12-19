require('dotenv').config();

const express = require('express');
const booksRoutes = require('./booksRoutes');
const db = require('./db'); // Import the database connection module

// const PORT = process.env.APP_PORT || 8080; // Specify the desired port, default is 8080


const app = express();

app.use(express.json());
app.use('/api', booksRoutes); // Prefix all routes with '/api'

const PORT = process.env.PORT || 3000;

// Start the server after establishing a database connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');

  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
