const ApiResponse = require("../../utils/ApiResponse");

function logout(req, res) {
  res.cookie("jwt", "", {
    maxAge: 1,
  });
  res.status(200).json(new ApiResponse(200,"","user logged out successfully"))
}

module.exports = logout;
