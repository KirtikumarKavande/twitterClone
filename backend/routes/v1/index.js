const express=require("express")
const userRoute=require('./user/index')
const router=express.Router()

router.use('/v1',userRoute)

module.exports=router