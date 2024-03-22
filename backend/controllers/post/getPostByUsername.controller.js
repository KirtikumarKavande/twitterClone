const Post = require("../../models/post.model");
const User = require("../../models/user.model");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const getUserByUsername = asyncHandler(async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const posts = await Post.find({ postedBy: user._id }).sort({ createdAt: -1 });


  res.status(200).json(new ApiResponse(200,posts,"user fetched successfully"));

});


module.exports =getUserByUsername
