const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User ',
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    numberOfGuests: {
        type: Number,
        required: true,
    },
    roomType: {
        type: String,
        enum: ['single room', 'double room', 'luxury suite'],
        required: true,
    },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;