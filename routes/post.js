const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const { postController } = require("../controllers");
const { addPostValidator, idValidator } = require("../validators/post");
const validate = require("../validators/validate");

router.post("/", isAuth, addPostValidator, validate, postController.addPost);

router.put(
	"/:id",
	isAuth,
	addPostValidator,
	idValidator,
	validate,
	postController.updatePost,
);

// router.get("/", isAuth, postController.getPosts);
router.get("/", postController.getPosts);

router.get("/:id", isAuth, idValidator, validate, postController.getPost);

// router.delete("/:id", isAuth, idValidator, validate, postController.deletePost);
router.delete("/:id", postController.deletePost);

module.exports = router;

// api/v1/posts?category=69cb982d7e704a80af638bd8
