const uploadToCloudinary = require("../../helper/cloudanaryUpload");
const asyncHandler = require("../../utils/asyncHandler");
const Post = require("../../models/post.model");
const ApiResponse = require("../../utils/ApiResponse");

const createPost = asyncHandler(async (req, res) => {
  const { text } = req.body;
  let postImg=null
  if(req.file){
   postImg = await uploadToCloudinary(req.file,"",res);
    
  }
  const post = new Post({
    postedBy: req.user._id,
    text,
    img: postImg,
  });

  let postData = await post.save();
  res
    .status(201)
    .json(new ApiResponse(201, postData, "post created successfully"));

});

module.exports = createPost;
