const express = require("express");
const router = express.Router();

const usertCtrl = require("../controllers/user");

router.post("/signup", usertCtrl.signup);
router.post("/login", usertCtrl.login);

module.exports = router;
