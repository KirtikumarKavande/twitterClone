const Post = require("../../models/post.model");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const getPost=asyncHandler( async(req,res)=>{
  const allPostByUSer= await Post.find({postedBy:req.user._id})
  console.log(allPostByUSer)
res.status(200).json(new ApiResponse(200,{posts:allPostByUSer},"all post fetched successfully"))
})

module.exports =getPost