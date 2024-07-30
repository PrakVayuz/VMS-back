const jobDescRepo = require('../repositories/jobDescriptionRepository');
const vendorRepo = require('../repositories/vendorRepository');

/**
 * Create a new job description
 * @param {Object} jobDescriptionData - Job description data
 * @returns {Promise<JobDescription>}
 */
exports.createJobDescription = async (jobDescriptionData) => {
  return await jobDescRepo.create(jobDescriptionData);
};

/**
 * Assign a job description to a vendor
 * @param {String} jobId - Job ID
 * @param {String} vendorId - Vendor ID
 * @returns {Promise<Object>}
 */
exports.assignJobDescription = async (jobId, vendorId) => {
  const jobDescription = await jobDescRepo.findById(jobId);
  const vendor = await vendorRepo.findById(vendorId);
  if (!jobDescription || !vendor) {
    throw new Error('Job Description or Vendor not found');
  }
  vendor.assignedJobs.push(jobId);
  await vendor.save();
  return { jobDescription, vendor };
};

/**
 * Unassign a job description from a vendor
 * @param {String} jobId - Job ID
 * @param {String} vendorId - Vendor ID
 * @returns {Promise<Object>}
 */
exports.unassignJobDescription = async (jobId, vendorId) => {
  const jobDescription = await jobDescRepo.findById(jobId);
  const vendor = await vendorRepo.findById(vendorId);
  if (!jobDescription || !vendor) {
    throw new Error('Job Description or Vendor not found');
  }
  vendor.assignedJobs.pull(jobId);
  await vendor.save();
  return { jobDescription, vendor };
};
