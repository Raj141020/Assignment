const mongoose = require('mongoose');

const businessInfoSchema = new mongoose.Schema({

  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  legal_name: {
    type: String,
    required: true
  },
  aadhar_number: {
    type: String,
    required: true,
    unique: true
  },
  pan_number: {
    type: String,
    required: true,
    unique: true
  },
  gstin_number: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  state_code: {
    type: String,
    required: true
  },
  state_name: {
    type: String,
    required: true
  },
  google_analytics_id: {
    type: String,
    required: true
  },
  pin_code: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('BusinessInfo', businessInfoSchema);
