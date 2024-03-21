const Post = require("../../models/post.model");
const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (post.postedBy.toString() === req.user._id.toString()) {
    const resData = await Post.findByIdAndDelete(id);
    console.log(resData);
    if (resData) {
      res.status(200).json(new ApiResponse(200, {}, "post Delete Success"));
    }
  } else {
    res.status(404).json(new ApiError(200, "You can not Delete the post"));
  }
});

module.exports = deletePost;
