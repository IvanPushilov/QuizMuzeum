const router = require('express').Router();
const authApiRouter = require('./api/authApi')
const tournamentsApiRouter = require('./api/tournamentsApi')
const mainpageApi = require('./api/mainpageApi')
const userApiRouter = require('./api/userApi')
const questionsApiRouter = require('./api/quiestionsApi')
const answersApiRouter = require('./api/answersApi')
const commentsApi = require('./api/commentApi')


router.use('/api', mainpageApi)
router.use('/api/auth', authApiRouter)
router.use('/api/tournaments', tournamentsApiRouter)

router.use('/api/profile/update', userApiRouter)
router.use('/api/questions', questionsApiRouter)
router.use('/api/answers', answersApiRouter)
router.use('/api/comments', commentsApi)




module.exports = router