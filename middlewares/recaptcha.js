const axios = require('axios');

/**
 * Middleware to verify reCAPTCHA token
 */
module.exports = async (req, res, next) => {
  const token = req.body.recaptchaToken;
  if (!token) return res.status(400).json({ message: 'reCAPTCHA token missing' });

  try {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token
      }
    });
    if (response.data.success) {
      next();
    } else {
      res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
