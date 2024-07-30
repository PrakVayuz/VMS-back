const sendResponse = (res, data = null, message = null, statusCode = 200) => {
    res.status(statusCode).json({ data, message });
  };
  
  const handleSuccess = (res, data, message) => {
    sendResponse(res, data, message, 200);
  };
  
  const handleError = (res, error, statusCode = 400) => {
    const message = error.message || 'An error occurred';
    sendResponse(res, null, message, statusCode);
  };
  
  module.exports = {
    handleSuccess,
    handleError,
  };
  