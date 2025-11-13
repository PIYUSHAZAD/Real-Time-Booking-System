// routes/paymentRoutes.js
const express = require('express');
const Payment = require('../models/paymentModel');
const router = express.Router();

// Example route for storing a payment
router.post('/payment', async (req, res) => {
  try {
    const { user_id, amount, payment_status } = req.body;
    const payment = new Payment({ user_id, amount, payment_status });
    await payment.save();
    res.status(201).json({ message: 'Payment saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving payment' });
  }
});

module.exports = router;
