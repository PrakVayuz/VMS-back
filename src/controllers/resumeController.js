const resumeService = require('../services/resumeService');

/**
 * Update resume status
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.updateResumeStatus = async (req, res) => {
  try {
    const updatedResume = await resumeService.updateResumeStatus(req.params.id, req.body.status);
    res.json(updatedResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Get all job applications
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.getAllJobApplications = async (req, res) => {
  try {
    const applications = await resumeService.getAllJobApplications();
    res.json(applications);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
