const express = require('express');
const createPost = require('../../../controllers/post/createPost.controller');
const upload = require('../../../middleware/multer');
const auth = require('../../../middleware/auth');
const getPost = require('../../../controllers/post/getPost.controller');

let router=express.Router()

router.post('/createpost',auth, upload.single("img"),createPost)
router.get('/getpost',auth,getPost)

module.exports = router