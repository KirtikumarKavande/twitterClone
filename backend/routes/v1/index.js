const express=require("express")
const userRoute=require('./user/user.route')
const postRoute=require('./post/post.route')
const router=express.Router()

router.use('/user',userRoute)
router.use('/post',postRoute)

module.exports=router