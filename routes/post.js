const express = require("express");
const controller = require("../controllers/controller");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.post("/", auth, controller.createPost);
router.put("/:id", auth, controller.updatePost);
router.delete("/:id", auth, controller.deletePost);
router.put('/:id/like', auth, controller.likePost)

module.exports = router;
