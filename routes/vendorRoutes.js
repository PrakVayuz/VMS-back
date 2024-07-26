const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

/**
 * Create a new vendor route
 */
router.post('/', vendorController.createVendor)

/**
 * Verify a vendor route
 */
.put('/verify/:id', vendorController.verifyVendor)

/**
 * Delete a vendor route
 */
.delete('/:id', vendorController.deleteVendor);

module.exports = router;
