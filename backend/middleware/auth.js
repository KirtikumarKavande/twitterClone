var jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");

const auth = asyncHandler((req, res, next) => {
  var decoded = jwt.verify(req.cookies.jwt, process.env.JWT_TOKEN);
  req.user = {
    _id: decoded.id,
  };
  next();
});

module.exports = auth;
