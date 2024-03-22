const Post = require("../../models/post.model");
const User = require("../../models/user.model");
const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const feed = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const following = user.following;

  const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({
    createdAt: -1,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, feedPosts, "feed get success"));
});

module.exports = feed;
