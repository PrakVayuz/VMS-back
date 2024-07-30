const { handleSuccess, handleError } = require('../middlewares/responseMiddleware');
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
    handleSuccess(res, { token, admin }, "Vendor Logged In");
    //res.json({ token, admin });
  } catch (error) {
    handleError(res,error,401);
    //res.status(401).json({ message: error.message });
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
   // res.status(201).json(vendor);
    handleSuccess(res,vendor,"Vendor Created",201);
  } catch (error) {
    handleError(res,error);
    //res.status(400).json({ message: error.message });
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
    handleSuccess(res,vendor,"Vendor Verified");
    //res.json(vendor);
  } catch (error) {
    handleError(res,error,404);
    //res.status(404).json({ message: error.message });
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
    //res.json({ message: 'Vendor deleted successfully' });
    handleSuccess(res,undefined,"Vendor deleted successfully");
  } catch (error) {
    handleError(res,error,404);
    //res.status(404).json({ message: error.message });
  }
};
