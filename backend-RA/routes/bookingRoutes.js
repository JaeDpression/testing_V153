const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.post('/', bookingController.createBooking); // Ensure this line exists
router.get('/', bookingController.getBookings);

module.exports = router;