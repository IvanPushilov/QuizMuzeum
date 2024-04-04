const express = require("express");
const router = express.Router();
const { Post } = require("../../db/models");

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json({ posts });
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
router.post("/posts", async (req, res) => {
  try {
    const { title, img, description, file } = req.body;

    const post = await Post.create({
      title,
      description,
      img,
      file,
    });
    res.json({ post });
  } catch ({ message }) {
    res.json({ message: message });
  }
});

module.exports = router;
