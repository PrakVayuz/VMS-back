const vendorService = require('../services/vendorService');


/**
 * Vendor login
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.vendorLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { token, admin } = await vendorService.login(username, password);
    res.json({ token, admin });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
/**
 * Create a new vendor
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.createVendor = async (req, res) => {
  try {
    const vendor = await vendorService.createVendor(req.body);
    res.status(201).json(vendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Verify a vendor
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.verifyVendor = async (req, res) => {
  try {
    const vendor = await vendorService.verifyVendor(req.params.id);
    res.json(vendor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Delete a vendor
 * @param {Request} req - HTTP request
 * @param {Response} res - HTTP response
 */
exports.deleteVendor = async (req, res) => {
  try {
    await vendorService.deleteVendor(req.params.id);
    res.json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
