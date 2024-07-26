const Resume = require('../models/Resume');

/**
 * Find a resume by ID
 * @param {String} id - Resume ID
 * @returns {Promise<Resume>}
 */
exports.findById = (id) => Resume.findById(id);

/**
 * Create a new resume
 * @param {Object} resumeData - Resume data
 * @returns {Promise<Resume>}
 */
exports.create = (resumeData) => new Resume(resumeData).save();

/**
 * Update a resume by ID
 * @param {String} id - Resume ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Resume>}
 */
exports.findByIdAndUpdate = (id, updateData) => Resume.findByIdAndUpdate(id, updateData, { new: true });

/**
 * Delete a resume by ID
 * @param {String} id - Resume ID
 * @returns {Promise<Resume>}
 */
exports.findByIdAndDelete = (id) => Resume.findByIdAndDelete(id);

/**
 * Find all resumes
 * @returns {Promise<Array<Resume>>}
 */
exports.findAll = () => Resume.find();
