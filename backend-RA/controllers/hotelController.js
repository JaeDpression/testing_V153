const Room = require('../models/Room');

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.send(rooms);
  } catch (error) {
    res.status(400).send({ message: 'Failed to retrieve rooms' });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.status(201).send({ message: 'Room created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Failed to create room' });
  }
};