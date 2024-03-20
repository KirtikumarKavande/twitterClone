const express = require('express');
const createPost = require('../../../controllers/post/createPost');

let router=express.Router()

router.post('/createpost',createPost)

module.exports = router