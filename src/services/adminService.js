const adminRepo = require('../repositories/adminRepository');
const { sendEmail } = require('../utils/email');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Admin login
 * @param {String} username - Admin username
 * @param {String} password - Admin password
 * @returns {Promise<Object>}
 */
exports.login = async (username, password) => {
  const admin = await adminRepo.findById(username);
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET, { expiresIn: '5h' });
  return { token, admin };
};

/**
 * Get admin profile
 * @param {String} id - Admin ID
 * @returns {Promise<Admin>}
 */
exports.getProfile = async (id) => {
  return await adminRepo.findById(id);
};

/**
 * Update admin profile
 * @param {String} id - Admin ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Admin>}
 */
exports.updateProfile = async (id, updateData) => {
  return await adminRepo.findByIdAndUpdate(id, updateData);
};

/**
 * Verify OTP and update password
 * @param {String} email - Admin email
 * @param {String} otp - OTP code
 * @param {String} newPassword - New password
 * @returns {Promise<Admin>}
 */
exports.verifyOtpAndUpdatePassword = async (email, otp, newPassword) => {
  const admin = await adminRepo.findByEmail(email);
  if (!admin || admin.otp !== otp || Date.now() > admin.otpExpires) {
    throw new Error('Invalid or expired OTP');
  }
  if (newPassword) {
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(newPassword, salt);
  }
  admin.otp = undefined;
  admin.otpExpires = undefined;
  return await admin.save();
};
