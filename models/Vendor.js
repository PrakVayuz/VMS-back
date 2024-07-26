const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Vendor schema
 */
const vendorSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  assignedJobs: [{ type: Schema.Types.ObjectId, ref: 'JobDescription' }],
  verified: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Vendor', vendorSchema);
