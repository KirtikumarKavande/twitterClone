const Post = require("../../models/post.model");
const User = require("../../models/user.model");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id:id }).select('-password')
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  // const posts = await Post.find({ postedBy: user.id}).sort({ createdAt: -1 });


  res.status(200).json(new ApiResponse(200,user,"user fetched successfully"));

});


module.exports =getUserById
