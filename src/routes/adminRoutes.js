const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

/**
 * Admin login route
 */
router.post('/login',authMiddleware, adminController.adminLogin)

/**
 * Get admin profile route
 */
.get('/profile/:id',authMiddleware, adminController.getAdminProfile)

/**
 * Update admin profile route
 */
.put('/profile/:id',authMiddleware, adminController.updateAdminProfile)

/**
 * Verify OTP and update password route
 */
.post('/verify-otp',authMiddleware, adminController.verifyOtpAndUpdatePassword)

// Route to verify Vendor
.post('/verify-vendor',authMiddleware,verifyVendor)

module.exports = router;
