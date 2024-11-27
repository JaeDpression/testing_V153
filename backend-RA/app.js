// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct
const bookingRoutes = require('./routes/bookingRoutes'); // Ensure this path is correct
const contactRoutes = require('./routes/contactRoutes'); // Add this if you have a contact route

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hotel_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Successfully connected to MongoDB.'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes); // Ensure this line is correct
app.use('/api/book', bookingRoutes); // Ensure this line is correct
app.use('/api/contact', contactRoutes); // Add this line if you have a contact route

module.exports = app; // Correctly export the app instance