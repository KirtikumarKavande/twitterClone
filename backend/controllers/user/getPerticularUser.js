const User = require("../../models/user.model");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const getPerticularUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let user = await User.findById(id).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "user fetched successfully"));
});

module.exports = getPerticularUser;
