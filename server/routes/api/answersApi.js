const express = require("express");
const router = express.Router();
const { Answer, Question } = require('../../db/models');


router.get('/', async (req, res) => {
  try {
    const answers = await Answer.findAll({
      include: {
        model: Question
      }
    })
  res.json({answers})
  } catch ({message}) {
    res.status(500).json(message)
  }
})

module.exports = router