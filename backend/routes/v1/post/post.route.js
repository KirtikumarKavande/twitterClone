const express = require('express');
const createPost = require('../../../controllers/post/createPost');
const upload = require('../../../middleware/multer');
const auth = require('../../../middleware/auth');

let router=express.Router()

router.post('/createpost',auth, upload.single("img"),createPost)

module.exports = router