var jwt = require("jsonwebtoken");

function signJwt(encodedObject) {
  var token = jwt.sign(encodedObject, process.env.JWT_TOKEN);
  return token;
}

module.exports = signJwt;
