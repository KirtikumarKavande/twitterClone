const express = require("express");
const addUser = require("../../../controllers/user/addUser.controller");
const loginUser = require("../../../controllers/user/loginUser.controller");
const logout = require("../../../controllers/user/logoutuser.controller");
const followUnfollowUser = require("../../../controllers/user/followUnfollowUser.controller");
const auth = require("../../../middleware/auth");
const updateUser = require("../../../controllers/user/updateUser.controller");
const upload = require("../../../middleware/multer");
const getPerticularUser = require("../../../controllers/user/getPerticularUser.controller");
const getUserById = require("../../../controllers/user/getUserById");
const suggestedUser = require("../../../controllers/user/suggestedUser");
const saveUnsavePost = require("../../../controllers/post/saveUnsavePost");

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/follow/:id", auth, followUnfollowUser);
router.post("/update", auth, updateUser);
router.get("/profile/:username", auth, getPerticularUser);
router.get('/userid/:id',auth,getUserById)
router.get('/suggesteduser',auth,suggestedUser)
router.post('/saveunsave',auth,saveUnsavePost)


module.exports = router;
