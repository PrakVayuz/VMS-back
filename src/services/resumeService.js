const resumeRepo = require('../repositories/resumeRepository');

/**
 * Update resume status
 * @param {String} id - Resume ID
 * @param {String} status - New status
 * @returns {Promise<Resume>}
 */
exports.updateResumeStatus = async (id, status) => {
  return await resumeRepo.findByIdAndUpdate(id, { status });
};

/**
 * Get all job applications
 * @returns {Promise<Array<Resume>>}
 */
exports.getAllJobApplications = async () => {
  return await resumeRepo.findAll();
};
