// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Remove or use this line later on if you are not working on this - Shayne: const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB with error handling
mongoose.connect('mongodb://localhost:27017/hotel_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Successfully connected to MongoDB.'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
// Remove this line if you arent working on it: app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/hotel', hotelRoutes);
app.use('/api/contact', contactRoutes);

module.exports = app;