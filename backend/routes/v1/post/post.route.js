const express = require('express');
const createPost = require('../../../controllers/post/createPost.controller');
const upload = require('../../../middleware/multer');
const auth = require('../../../middleware/auth');
const getPost = require('../../../controllers/post/getPost.controller');
const deletePost = require('../../../controllers/post/deletePost.controller');
const likePostController = require('../../../controllers/post/likePost.controller');
const replyToPost = require('../../../controllers/post/replayPost.controller');
const feed = require('../../../controllers/post/feed.controller');
const getUserByUsername = require('../../../controllers/post/getPostByUsername.controller');

let router=express.Router()

router.post('/createpost',auth, upload.single("img"),createPost)
router.get('/getpost',auth,getPost)
router.get('/deletepost/:id',auth,deletePost)
router.get('/likepost/:id',auth,likePostController)
router.post('/replaypost/:id',auth,replyToPost)
router.get('/feed',auth,feed)
router.get('/userspost/:username',auth,getUserByUsername)

module.exports = router