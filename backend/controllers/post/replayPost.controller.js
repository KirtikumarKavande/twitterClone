const Post = require("../../models/post.model");
const User = require("../../models/user.model");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const replyToPost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const user = await User.findById(req.user._id);

  await Post.findByIdAndUpdate(id, {
    $push: {
      replies: {
        comment: comment,
        userId: req.user._id,
        profilePic: user.profilePic,
        username: user.username,
      },
    },
  });

  res.status(200).json(new ApiResponse(200, {}, "comment added successfully"));
});

module.exports = replyToPost;
