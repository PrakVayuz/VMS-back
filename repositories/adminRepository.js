const Admin = require('../models/Admin');

/**
 * Find an admin by ID
 * @param {String} id - Admin ID
 * @returns {Promise<Admin>}
 */
exports.findById = (id) => Admin.findById(id);

/**
 * Find an admin by email
 * @param {String} email - Admin email
 * @returns {Promise<Admin>}
 */
exports.findByEmail = (email) => Admin.findOne({ email });

/**
 * Create a new admin
 * @param {Object} adminData - Admin data
 * @returns {Promise<Admin>}
 */
exports.create = (adminData) => new Admin(adminData).save();

/**
 * Update an admin by ID
 * @param {String} id - Admin ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Admin>}
 */
exports.findByIdAndUpdate = (id, updateData) => Admin.findByIdAndUpdate(id, updateData, { new: true });

/**
 * Find all admins
 * @returns {Promise<Array<Admin>>}
 */
exports.findAll = () => Admin.find();
