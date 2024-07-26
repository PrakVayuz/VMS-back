const adminService = require('../services/adminService');

/**
 * Admin login
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { token, admin } = await adminService.login(username, password);
    res.json({ token, admin });
  } catch (error) {
    res.status(401).json({ message: error.message });
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
    res.json(admin);
  } catch (error) {
    res.status(404).json({ message: error.message });
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
    res.json(updatedAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
