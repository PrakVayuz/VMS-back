const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

/**
 * Update resume status route
 */
router.put('/:id/status', resumeController.updateResumeStatus)

/**
 * Get all job applications route
 */
.get('/applications', resumeController.getAllJobApplications);

module.exports = router;
