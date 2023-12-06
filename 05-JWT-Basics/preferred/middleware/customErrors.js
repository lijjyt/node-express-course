const { StatusCodes } = require('http-status-codes');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

const errorHandler = (err, req, res, next) => {
    if (err instanceof BadRequestError) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    }
console.error(err.stack);
res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
};
  

module.exports = { BadRequestError, errorHandler };
