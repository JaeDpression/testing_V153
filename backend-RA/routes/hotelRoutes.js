const express = require('express');
const hotelController = require('../controllers/hotelController');

const router = express.Router();

router.get('/rooms', hotelController.getRooms);
router.post('/rooms', hotelController.createRoom);

module.exports = router;