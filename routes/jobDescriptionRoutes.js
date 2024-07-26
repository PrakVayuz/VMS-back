const express = require('express');
const router = express.Router();
const jobDescriptionController = require('../controllers/jobDescriptionController');

/**
 * Create a new job description route
 */
router.post('/', jobDescriptionController.createJobDescription)

/**
 * Assign a job description to a vendor route
 */
.post('/assign', jobDescriptionController.assignJobDescription)

/**
 * Unassign a job description from a vendor route
 */
.post('/unassign', jobDescriptionController.unassignJobDescription);

module.exports = router;
