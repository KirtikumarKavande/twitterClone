const User = require("../../models/user.model");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const saveUnsavePost = asyncHandler(async (req, res) => {
  const { postId, postedBy } = req.body;
  const currentUser = await User.findById(req.user._id);

  //  currentUser.saved.includes(postId);
  let isSaved = currentUser?.saved?.some((obj) => obj.postId ===postId);
  if (isSaved) {
    //  unsave post
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { saved: { postId, postedBy } },
    });
    res.status(200).json(new ApiResponse(200, {}, "unsaved"));
  } else {
    // save post
    await User.findByIdAndUpdate(req.user._id, {
      $push: { saved: { postId, postedBy } },
    });
    res.status(200).json(new ApiResponse(200, {}, "saved"));
  }
});

module.exports = saveUnsavePost;
