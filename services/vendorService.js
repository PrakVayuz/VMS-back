const vendorRepo = require('../repositories/vendorRepository');
const { sendEmail } = require('../utils/email');
const bcrypt = require('bcryptjs');


/**
 * Vendor login
 * @param {String} username - Admin username
 * @param {String} password - Admin password
 * @returns {Promise<Object>}
 */
exports.login = async (username, password) => {
    const vendor = await vendorRepo.findById(username);
    if (!vendor || !(await bcrypt.compare(password, vendor.password))) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET, { expiresIn: '5h' });
    return { token, admin };
  };


/**
 * Create a new vendor
 * @param {Object} vendorData - Vendor data
 * @returns {Promise<Vendor>}
 */
exports.createVendor = async (vendorData) => {
  if (await vendorRepo.findByEmail(vendorData.email)) {
    throw new Error('Vendor with this email already exists');
  }
  vendorData.password = await bcrypt.hash(vendorData.password, 10);
  const newVendor = await vendorRepo.create(vendorData);
  await sendEmail(newVendor.email, 'Welcome to Vendor Management System', `Your username is: ${vendorData.email} and your temporary password is: ${vendorData.password}`);
  return newVendor;
};

/**
 * Verify a vendor
 * @param {String} vendorId - Vendor ID
 * @returns {Promise<Vendor>}
 */
exports.verifyVendor = async (vendorId) => {
  const vendor = await vendorRepo.findById(vendorId);
  if (!vendor) {
    throw new Error('Vendor not found');
  }
  vendor.verified = true;
  return await vendor.save();
};

/**
 * Delete a vendor
 * @param {String} vendorId - Vendor ID
 * @returns {Promise<void>}
 */
exports.deleteVendor = async (vendorId) => {
  const vendor = await vendorRepo.findByIdAndDelete(vendorId);
  if (!vendor) {
    throw new Error('Vendor not found');
  }
};
