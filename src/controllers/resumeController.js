const { handleSuccess, handleError } = require('../middlewares/responseMiddleware');
const resumeService = require('../services/resumeService');

/**
 * Update resume status
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.updateResumeStatus = async (req, res) => {
  try {
    const updatedResume = await resumeService.updateResumeStatus(req.params.id, req.body.status);
    handleSuccess(res,updatedResume,"Resume updated");
   // res.json(updatedResume);
  } catch (error) {
    handleError(res,error);
   // res.status(400).json({ message: error.message });
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
    handleSuccess(res,applications);
    //res.json(applications);
  } catch (error) {
    handleError(res,error);
    //res.status(400).json({ message: error.message });
  }
};
