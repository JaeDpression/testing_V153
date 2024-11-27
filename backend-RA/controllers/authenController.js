const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY');
    res.status(201).send({ token, userId: user._id });
  } catch (error) {
    res.status(400).send({ message: 'Failed to create user' });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY');
    res.send({ token, userId: user._id });
  } catch (error) {
    res.status(400).send({ message: 'Failed to login' });
  }
};