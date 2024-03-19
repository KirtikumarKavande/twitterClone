const User = require("../../models/user.model");
const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const followUnfollowUser = asyncHandler(async function (req, res) {
  const { id } = req.params;
  const userToModify = await User.findById(id);
  const currentUser = await User.findById(req.user._id);
  console.log(userToModify, currentUser);

  if (id === req.user._id)
    return res
      .status(400)
      .json({ error: "You cannot follow/unfollow yourself" });

  if (!userToModify || !currentUser)
    return res.status(400).json({ error: "User not found" });

  const isFollowing = currentUser.following.includes(id);

  if (isFollowing) {
    // Unfollow user
    await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
    await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
    res.status(200).json(new ApiResponse(200,{},"user unfollowed successfully"));

  } else {
    // Follow user
    await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
    await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
    res.status(200).json(new ApiResponse(200,{},"user followed successfully"));
  }
});

module.exports = followUnfollowUser;
