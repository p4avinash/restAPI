const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

//getting all the posts form the database
router.get("/", (req, res) => {
  const posts = Post.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//getting a specific post form the database
router.get("/:postId", (req, res) => {
  const specificPost = Post.findById(req.params.postId)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//delete a specific post
router.delete("/:postId", (req, res) => {
  Post.remove({ _id: req.params.postId })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//submits a post to the database
router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  post
    .save()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
