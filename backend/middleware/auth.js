var jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");

const auth = asyncHandler((req, res, next) => {
  var decoded = jwt.verify(req.cookies.jwt, process.env.JWT_TOKEN);

  req.user = decoded;
  next();
});

module.exports = auth;
