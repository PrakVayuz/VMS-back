const JobDescription = require('../models/JobDescription');

/**
 * Find a job description by ID
 * @param {String} id - Job Description ID
 * @returns {Promise<JobDescription>}
 */
exports.findById = (id) => JobDescription.findById(id);

/**
 * Create a new job description
 * @param {Object} jobDescriptionData - Job description data
 * @returns {Promise<JobDescription>}
 */
exports.create = (jobDescriptionData) => new JobDescription(jobDescriptionData).save();

/**
 * Update a job description by ID
 * @param {String} id - Job Description ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<JobDescription>}
 */
exports.findByIdAndUpdate = (id, updateData) => JobDescription.findByIdAndUpdate(id, updateData, { new: true });

/**
 * Delete a job description by ID
 * @param {String} id - Job Description ID
 * @returns {Promise<JobDescription>}
 */
exports.findByIdAndDelete = (id) => JobDescription.findByIdAndDelete(id);

/**
 * Find all job descriptions
 * @returns {Promise<Array<JobDescription>>}
 */
exports.findAll = () => JobDescription.find();
