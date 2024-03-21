const Post = require("../../models/post.model");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const likePostController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);
  if (post.likes.includes(req.user._id)) {
    //unlike the post
    await Post.findByIdAndUpdate(id, { $pull: { likes: req.user._id } });
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "unlike successfully"));
  } else {
    //like the post
    await Post.findByIdAndUpdate(id, { $push: { likes: req.user._id } });
    return res.status(200).json(new ApiResponse(200, {}, "liked successfully"));
  }
});

module.exports = likePostController;
