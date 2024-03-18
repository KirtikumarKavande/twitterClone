const express = require("express");
const addUser = require("../../../controllers/user/addUser.controller");
const loginUser = require("../../../controllers/user/loginUser.controller");

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login", loginUser);

module.exports = router;
