const Post = require("../../models/post.model");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const getPostById=asyncHandler( async(req,res)=>{
  const post= await Post.findById(req.params.pid)
res.status(200).json(new ApiResponse(200,{post}," post fetched successfully"))
})

module.exports =getPostById