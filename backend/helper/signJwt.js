var jwt = require("jsonwebtoken");

function signJwt(encodedObject, res) {
  var token = jwt.sign(encodedObject, process.env.JWT_TOKEN, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days
    sameSite: "strict", //CSRF protection,
    secure:true
  });
  return token;
}

module.exports = signJwt;
