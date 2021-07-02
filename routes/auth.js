const express = require("express");
const controller = require("../controllers/controller");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);
router.get("/auth", auth, controller.authUser);

module.exports = router;
