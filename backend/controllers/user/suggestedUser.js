const User = require("../../models/user.model");
const asyncHandler = require("../../utils/asyncHandler");

const suggestedUser = asyncHandler(async (req,res) => {
  // Find the user based on userId
  const loggedInUser = await User.findById(req.user._id);
  if (!loggedInUser) {
    return res.status(404).json({ message: "User not found" });
  }
  const suggestedUsers = await User.find({
    _id: { $nin: [...loggedInUser.following, loggedInUser._id] },
  }).limit(10); // Limiting to 10 suggested users

  res.json(suggestedUsers);
});

module.exports = suggestedUser;
