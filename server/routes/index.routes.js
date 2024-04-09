const router = require('express').Router();
const authApiRouter = require('./api/authApi')
const tournamentsApiRouter = require('./api/tournamentsApi')
const mainpageApi = require('./api/mainpageApi')
const questionsApiRouter = require('./api/quiestionsApi')
const answersApiRouter = require('./api/answersApi')


router.use('/api', mainpageApi)
router.use('/api/auth', authApiRouter)
router.use('/api/tournaments', tournamentsApiRouter)
router.use('/api/questions', questionsApiRouter)
router.use('/api/answers', answersApiRouter)



module.exports = router