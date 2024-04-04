const express = require('express');
const router = express.Router()
const {Post} = require('../../db/models')


router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.json({posts})
  } catch ({message}) {
    res.status(500).json(message)
  }
})

module.exports = router