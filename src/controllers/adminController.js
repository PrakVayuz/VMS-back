const adminService = require('../services/adminService');
const vendorRepository = require('../repositories/vendorRepository');
const { handleSuccess, handleError } = require('../middlewares/responseMiddleware');

/**
 * Admin login
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { token, admin } = await adminService.login(username, password);
    handleSuccess(res, { token, admin }, "Admin Login Successfully", 200);
  } catch (error) {
    handleError(res, error, 401);
  }
};

/**
 * Get admin profile
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.getAdminProfile = async (req, res) => {
  try {
    const admin = await adminService.getProfile(req.params.id);
    handleSuccess(res, admin);
  } catch (error) {
    handleError(res, error, 404);
  }
};

/**
 * Update admin profile
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.updateAdminProfile = async (req, res) => {
  try {
    const updatedAdmin = await adminService.updateProfile(req.params.id, req.body);
    handleSuccess(res, updatedAdmin);
  } catch (error) {
    handleError(res, error, 400);
  }
};

/**
 * Verify OTP and update password
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.verifyOtpAndUpdatePassword = async (req, res) => {
  try {
    await adminService.verifyOtpAndUpdatePassword(req.body.email, req.body.otp, req.body.newPassword);
    handleSuccess(res, null, 'Password updated successfully');
  } catch (error) {
    handleError(res, error, 400);
  }
};

/**
 * Verify vendor
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.verifyVendor = async (req, res) => {
  const { vendorId } = req.body;

  try {
    await vendorRepository.findById(vendorId);
    handleSuccess(res, null, 'Vendor Verified Successfully');
  } catch (error) {
    handleError(res, error, 400);
  }
};
