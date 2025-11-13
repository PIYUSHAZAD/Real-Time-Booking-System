// routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/bookingModel');
const router = express.Router();

// Example route for storing a booking
router.post('/booking', async (req, res) => {
  try {
    const { user_id, destination, guests, arrival_date, leaving_date } = req.body;
    const booking = new Booking({ user_id, destination, guests, arrival_date, leaving_date });
    await booking.save();
    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving booking' });
  }
});

module.exports = router;
