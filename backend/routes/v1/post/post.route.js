const express = require('express');
const createPost = require('../../../controllers/post/createPost.controller');
const upload = require('../../../middleware/multer');
const auth = require('../../../middleware/auth');
const getPost = require('../../../controllers/post/getPost.controller');
const deletePost = require('../../../controllers/post/deletePost.controller');
const likePostController = require('../../../controllers/post/likePost.controller');

let router=express.Router()

router.post('/createpost',auth, upload.single("img"),createPost)
router.get('/getpost',auth,getPost)
router.get('/deletepost/:id',auth,deletePost)
router.get('/likepost/:id',auth,likePostController)

module.exports = router