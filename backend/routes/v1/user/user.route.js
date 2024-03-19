const express = require("express");
const addUser = require("../../../controllers/user/addUser.controller");
const loginUser = require("../../../controllers/user/loginUser.controller");
const logout = require("../../../controllers/user/logoutuser");

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login", loginUser);
router.get("/logout", logout);

module.exports = router;