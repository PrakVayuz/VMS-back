const nodemailer = require('nodemailer');

/**
 * Send an email
 * @param {String} to - Recipient email address
 * @param {String} subject - Email subject
 * @param {String} text - Email body
 * @returns {Promise<void>}
 */
exports.sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  });
};
