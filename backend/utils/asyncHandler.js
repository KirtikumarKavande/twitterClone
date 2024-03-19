const ApiError = require("./ApiError");

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    try {
      Promise.resolve(requestHandler(req, res, next))
    } catch (error) {
      console.log(error)
      res.status(400).json(new ApiError(400, "something went wrong"));
    }
    
  };
};

module.exports = asyncHandler;
