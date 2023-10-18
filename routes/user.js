const express = require("express");
const catchAsync = require("../utils/catchAsync");
const user = require("../controllers/user");
const router = express.Router();


router.route("/register/new")
    .post(catchAsync(user.register));

router.route("/login")
    .post(catchAsync(user.login));

module.exports = router;