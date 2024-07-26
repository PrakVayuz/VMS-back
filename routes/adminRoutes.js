const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

/**
 * Admin login route
 */
router.post('/login', adminController.adminLogin)

/**
 * Get admin profile route
 */
.get('/profile/:id', adminController.getAdminProfile)

/**
 * Update admin profile route
 */
.put('/profile/:id', adminController.updateAdminProfile)

/**
 * Verify OTP and update password route
 */
.post('/verify-otp', adminController.verifyOtpAndUpdatePassword);

module.exports = router;
