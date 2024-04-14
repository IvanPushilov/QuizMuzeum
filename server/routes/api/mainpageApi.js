const express = require("express");
const router = express.Router();
const { Post } = require("../../db/models");
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/postImg');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json({ posts });
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
router.post("/posts", upload.single('img'), async (req, res) => {
  try {
    const { title, description } = req.body;
    let newFileUrl = '';
		if (req.file) {
			newFileUrl = `/postImg/${req.file.originalname}`;
		}

    const post = await Post.create({
      title,
      description,
      img: newFileUrl,
    });
    res.json({ post });
  } catch ({ message }) {
    res.json({ message: message });
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.destroy({ where: { id } });
    res.json({ post });
  } catch ({ message }) {
    res.json({ message: message });
  }
})

module.exports = router;
