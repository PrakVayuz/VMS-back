const jobDescriptionService = require('../services/jobDescriptionService');

/**
 * Create a new job description
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.createJobDescription = async (req, res) => {
  try {
    const jobDescription = await jobDescriptionService.createJobDescription(req.body);
    res.status(201).json(jobDescription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Assign a job description to a vendor
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.assignJobDescription = async (req, res) => {
  try {
    const { jobId, vendorId } = req.body;
    const { jobDescription, vendor } = await jobDescriptionService.assignJobDescription(jobId, vendorId);
    res.json({ jobDescription, vendor });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Unassign a job description from a vendor
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.unassignJobDescription = async (req, res) => {
  try {
    const { jobId, vendorId } = req.body;
    const { jobDescription, vendor } = await jobDescriptionService.unassignJobDescription(jobId, vendorId);
    res.json({ jobDescription, vendor });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
