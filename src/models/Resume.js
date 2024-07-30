const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Resume schema
 */
const resumeSchema = new Schema({
  vendor: { type: Schema.Types.ObjectId, ref: 'Vendor' },
  jobDescription: { type: Schema.Types.ObjectId, ref: 'JobDescription' },
  fileUrl: { type: String, required: true },
  status: { type: String, enum: ['applied', 'under review', 'interviewed', 'hired', 'rejected'],
  default: 'applied' }
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
