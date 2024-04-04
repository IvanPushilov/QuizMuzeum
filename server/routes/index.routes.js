const router = require('express').Router();
const authApiRouter = require('./api/authApi')
const quizzesApiRouter = require('./api/quizzesApi')

router.use('/api/auth', authApiRouter)
router.use('/api/quizzes', quizzesApiRouter)

module.exports = router