const express = require("express");
const router = express.Router();
const { Album } = require('../../db/models')

router.get('/', async (req, res) => {
 try {
  const album = await Album.findAll()
  res.json({album})
 } catch ({message}) {
  res.status(500).json(message)
 }
})

module.exports = router