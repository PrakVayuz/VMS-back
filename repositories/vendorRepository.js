const Vendor = require('../models/Vendor');

/**
 * Find a vendor by ID
 * @param {String} id - Vendor ID
 * @returns {Promise<Vendor>}
 */
exports.findById = (id) => Vendor.findById(id);

/**
 * Find a vendor by email
 * @param {String} email - Vendor email
 * @returns {Promise<Vendor>}
 */
exports.findByEmail = (email) => Vendor.findOne({ email });

/**
 * Create a new vendor
 * @param {Object} vendorData - Vendor data
 * @returns {Promise<Vendor>}
 */
exports.create = (vendorData) => new Vendor(vendorData).save();

/**
 * Update a vendor by ID
 * @param {String} id - Vendor ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Vendor>}
 */
exports.findByIdAndUpdate = (id, updateData) => Vendor.findByIdAndUpdate(id, updateData, { new: true });

/**
 * Delete a vendor by ID
 * @param {String} id - Vendor ID
 * @returns {Promise<Vendor>}
 */
exports.findByIdAndDelete = (id) => Vendor.findByIdAndDelete(id);

/**
 * Find all vendors
 * @returns {Promise<Array<Vendor>>}
 */
exports.findAll = () => Vendor.find();
