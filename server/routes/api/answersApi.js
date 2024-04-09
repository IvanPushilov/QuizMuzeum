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



router.get('/:id', async (req, res) => {
  const {id} = req.params
  console.log(id, 123123321123123123123);
  try {
    const answers = await Answer.findOne({where: +id})
    const question = await Question.findOne({where: {id: answers.question_id}})
    let messageAnswer = ''
    if(answers.isCorrect){
      messageAnswer = 'Ответ верный'
    }else{
      messageAnswer = 'Ответ неверный'

    }

  res.json({messageAnswer})
  } catch ({message}) {
    res.status(500).json(message)
  }
})
module.exports = router