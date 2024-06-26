const hashedPassword = require("../../helper/encryptPassword");
const User = require("../../models/user.model");
const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");
const uploadToCloudinary = require("../../helper/cloudanaryUpload");
const updateUser = asyncHandler(async (req, res) => {
  const { name, username, bio, password, profilePic } = req.body;

  const user = await User.findById(req.user._id);
  if (!user) return;
  if (user.username !== username) {
    if (await User.findOne({ username })) {
      return res
        .status(200)
        .json(new ApiError(200, {}, "username already exists"));
    }
  }
  let profileImg;
  if (profilePic) {
    profileImg = await uploadToCloudinary(profilePic, user?.profilePic, res);
  }

  let updatedPassword;
  if (password) {
    updatedPassword = await hashedPassword(password);
  }

  user.name = name || user.name;
  user.profilePic = profileImg || user.profilePic;
  user.username = username || user.username;
  user.password = updatedPassword || user.password;
  user.bio = bio || user.bio;
  let resData = await user.save();
  console.log("resData",resData)
  let dataTobeSend = {
    name: resData.name,
    profilePic: resData.profilePic,
    username: resData.username,
    bio: resData.bio,
    email: resData.email,
    followers: resData.followers,
    saved: resData.saved,
    following: resData.following,
    _id: resData._id,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, dataTobeSend, "user updated successfully"));
});

module.exports = updateUser;
