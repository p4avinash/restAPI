const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

//getting all the posts form the database
router.get("/", (req, res) => {
  const posts = Post.find()
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
