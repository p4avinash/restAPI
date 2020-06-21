const express = require("express");
const Post = require("../models/Post");
const { response } = require("express");
const router = express.Router();

//posts homepage
router.get("/", (req, res) => {
  res.send("This is the Post page..!!");
});

//avinash posts
router.get("/avi", (req, res) => {
  res.send("Avinash is awesome..!!");
});

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
