const express = require("express");
const router = express.Router();
const commentRoute = require("../controllers/comments")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createComment/:id", commentRoute.createComment);


module.exports = router;
