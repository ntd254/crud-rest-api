function errorHandler(err, req, res, next) {
  const {msg} = err;
  return res.status(400).json({message: msg});
}

module.exports = errorHandler;