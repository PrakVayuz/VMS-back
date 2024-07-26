const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Job Description schema
 */
const jobDescriptionSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  manager: { type: String, required: true },
  description: { type: String, required: true },
  posted: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('JobDescription', jobDescriptionSchema);
