const jwt = require('jsonwebtoken');

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized' });
  }
};