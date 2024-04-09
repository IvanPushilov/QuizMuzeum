const router = require('express').Router();
const { Question, Answer } = require('../../db/models')

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [
				{
					model: Answer,
				},
      ]
    })
    res.json({questions})
  } catch ({message}) {
    res.status(500).json(message)
  }
})

router.get('/:questionId', async (req, res) => {
  console.log();
  try {
    const {questionId} = req.params
    const question = await Question.findOne({where: {id: +questionId},include: 
      {
        model: Answer,
      },
    })
    // console.log(question, 123123123123123123123123312123123);
    res.json({question})
  } catch ({message}) {
    res.status(500).json(message)
  }
})

module.exports = router;