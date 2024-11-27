const express = require('express');
const Reservation = require('../models/Booking');

const router = express.Router();

// Create a new reservation
router.post('/', async (req, res) => {
    const { user, checkInDate, checkOutDate, numberOfGuests, roomType } = req.body;

    const reservation = new Reservation({
        user,
        checkInDate,
        checkOutDate,
        numberOfGuests,
        roomType,
    });

    try {
        const savedReservation = await reservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get reservations by user ID
router.get('/:userId', async (req, res) => {
    try {
        const reservations = await Reservation.find({ user: req.params.userId }).populate('user');
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;