var jwt = require("jsonwebtoken");

function signJwt(encodedObject, res) {
  var token = jwt.sign(encodedObject, process.env.JWT_TOKEN, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    domain: "https://twitterclone-2-jiot.onrender.com",
    // httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days
    sameSite: "strict", //CSRF protection,
    // secure:true
  });
  return token; 
}

module.exports = signJwt;
