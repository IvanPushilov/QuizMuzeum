const express = require('express');
const router = express.Router()
const {Tournament} = require('../../db/models')


router.get('/', async (req, res) => {
  try {
    const quizzes = await Tournament.findAll()
    res.json({quizzes})
  } catch ({message}) {
    res.status(500).json(message)
  }
})

module.exports = router