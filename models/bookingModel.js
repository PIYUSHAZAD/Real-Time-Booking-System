// models/bookingModel.js
const { mongoose } = require('../database');

const bookingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  destination: {
    type: String,
    required: true,
    trim: true
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
    max: 20
  },
  arrival_date: {
    type: Date,
    required: true
  },
  leaving_date: {
    type: Date,
    required: true
  },
  package_price: {
    type: Number,
    required: true,
    min: 0
  },
  total_amount: {
    type: Number,
    required: true,
    min: 0
  },
  booking_status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  payment_status: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  special_requests: {
    type: String,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Validate that leaving_date is after arrival_date
bookingSchema.pre('save', function (next) {
  if (this.leaving_date <= this.arrival_date) {
    return next(new Error('Leaving date must be after arrival date'));
  }
  this.updated_at = new Date();
  next();
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
