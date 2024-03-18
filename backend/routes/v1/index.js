const express=require("express")
const userRoute=require('./user/user.route')
const router=express.Router()

router.use('/v1',userRoute)

module.exports=router