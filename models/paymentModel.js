// models/paymentModel.js
const { mongoose } = require('../database');

const paymentSchema = new mongoose.Schema({
  booking_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Booking'
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'INR',
    enum: ['INR', 'USD', 'EUR', 'GBP']
  },
  payment_method: {
    type: String,
    required: true,
    enum: ['credit_card', 'debit_card', 'net_banking', 'paypal', 'upi', 'wallet']
  },
  payment_gateway: {
    type: String,
    enum: ['stripe', 'paypal', 'razorpay', 'manual'],
    default: 'manual'
  },
  transaction_id: {
    type: String,
    unique: true,
    sparse: true
  },
  gateway_transaction_id: {
    type: String,
    sparse: true
  },
  payment_status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded'],
    default: 'pending'
  },
  payment_date: {
    type: Date,
    default: Date.now
  },
  failure_reason: {
    type: String,
    trim: true
  },
  refund_amount: {
    type: Number,
    default: 0,
    min: 0
  },
  refund_date: {
    type: Date
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed
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

// Generate transaction ID before saving
paymentSchema.pre('save', function (next) {
  if (!this.transaction_id) {
    this.transaction_id = 'TXN_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  if (this.payment_status === 'completed' && !this.payment_date) {
    this.payment_date = new Date();
  }

  this.updated_at = new Date();
  next();
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
