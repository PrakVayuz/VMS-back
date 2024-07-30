const { handleSuccess, handleError } = require('../middlewares/responseMiddleware');
const jobDescriptionService = require('../services/jobDescriptionService');

/**
 * Create a new job description
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.createJobDescription = async (req, res) => {
  try {
    const jobDescription = await jobDescriptionService.createJobDescription(req.body);
    handleSuccess(res,jobDescription,"Job Description Created",201);
    // res.status(201).json(jobDescription);
  } catch (error) {
    handleError(res,error,400);
  //  res.status(400).json({ message: error.message });
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
     handleSuccess(res,{jobDescription,vendor},"Job Assigned");
    //res.json({ jobDescription, vendor });
  } catch (error) {
    handleError(res,error);
    //res.status(400).json({ message: error.message });
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
    handleSuccess(res,{ jobDescription, vendor },"Job Unassinged");
    //res.json({ jobDescription, vendor });
  } catch (error) {
    handleError(res,error);
    //res.status(400).json({ message: error.message });
  }
};
