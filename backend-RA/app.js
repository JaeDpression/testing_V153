const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Assuming you're using MongoDB
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For token generation

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hotel_db', { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User ', UserSchema); // Fixed typo: removed extra space

// Sign Up Endpoint
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser  = new User({ name, email, password: hashedPassword });
    await newUser .save();
    res.status(201).json({ message: 'User  created successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
});

// Sign In Endpoint
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Generate token (optional)
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Booking Schema (if using MongoDB)
const BookingSchema = new mongoose.Schema({
  checkin: Date,
  checkout: Date,
  guests: Number,
  roomType: String,
});

const Booking = mongoose.model('Booking', BookingSchema);

// Booking Endpoint
app.post('/api/book', async (req, res) => {
  const { checkin, checkout, guests, roomType } = req.body;
  try {
    const newBooking = new Booking({ checkin, checkout, guests, roomType });
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful', booking: newBooking });
  } catch (error) {
    res.status(400).json({ error: 'Error creating booking' });
  }
});

// Export the app for use in server.js
module.exports = app;