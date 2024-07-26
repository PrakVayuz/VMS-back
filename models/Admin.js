const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Admin schema
 */
const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: String,
  otpExpires: Date
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
