const signJwt = require("../../helper/signJwt");
const verifyPassword = require("../../helper/verifyPassword");
const User = require("../../models/user.model");
const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const loginUser = asyncHandler(async (req, res) => {
  console.log("email check", req.body.email);
  let user = await User.findOne({ email: req.body.email.trim() });
  if (!user) {
    return res
      .status(400)
      .json(new ApiError(400, "User does Not Exist plz signup"));
  }
  if (user && (await verifyPassword(req.body.password, user.password))) {
    let token = signJwt({ id: user.id }, res);
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { email: user.email, bio: user.bio, username: user.username,name:user.name,profilePic: user.profilePic},
          "SignIn success"
        )
      );
  } else {
    return res.status(400).json(new ApiError(400, "authentication Failed"));
  }
});

module.exports = loginUser;
