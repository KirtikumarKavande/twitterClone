const hashedPassword = require("../../helper/encryptPassword");
const User = require("../../models/user.model");
const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const updateUser = asyncHandler(async (req, res) => {
  const { name, username, profilePic, bio, password } = req.body;

  const user = await User.findById(req.user._id);
  if (!user) return;
   if (user.username !== username) {
    if (await User.findOne({ username })) {
      return res
        .status(200)
        .json(new ApiError(200, {}, "username already exists"));
    }
  }

  let updatedPassword;
  if (password) {
    updatedPassword = await hashedPassword(password);
  }

  user.name = name || user.name;
  user.profilePic = profilePic || user.profile;
  user.username = username || user.username;
  user.password = updatedPassword || user.password;
  user.bio = bio || user.bio;
  let resData = await user.save();

  res.status(200).json(new ApiResponse(200, {}, "user updated successfully"));
});

module.exports = updateUser;
