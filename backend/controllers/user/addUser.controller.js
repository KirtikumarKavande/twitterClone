const hashedPassword = require("../../helper/encryptPassword");
const signJwt = require("../../helper/signJwt");
const User = require("../../models/user.model");
const ApiError = require("../../utils/ApiError");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");
const { emailRegex, passwordRegex } = require("../../utils/regex");
let addUser = asyncHandler(async function (req, res) {
  const {
    name,

    email,
    username,
    password,
  } = req.body;

  if (!emailRegex.test(email)) {
    return res.status(400).json(new ApiError(400, "Enter Valid Email"));
  }
  if (!passwordRegex.test(password)) {
    return res.status(400).json(new ApiError(400, "Enter Valid Password"));
  }

  let userEmailCheck = await User.findOne({ email });

  if (userEmailCheck) {
    return res.status(400).json(new ApiError(400, "Email Already Exists"));
  }

  let usernameCheck = await User.findOne({ username });

  if (usernameCheck) {
    return res.status(400).json(new ApiError(400, "username Already Exists"));
  }

  let pass = await hashedPassword(password);

  let user = new User({
    name,
    username,
   email,
    password: pass,
  });
  let resData = await user.save();

  let token = signJwt({ id: resData.id },res);
  resData = resData.toObject();
  delete resData.password; // Remove password from response data
  resData.token = token;

  return res.status(201).json(new ApiResponse(201, resData, "user created"));
});
module.exports = addUser;
