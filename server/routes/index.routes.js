const router = require('express').Router();
const authApiRouter = require('./api/authApi')
const tournamentsApiRouter = require('./api/tournamentsApi')
const mainpageApi = require('./api/mainpageApi')
const commentsApi = require('./api/commentApi')



router.use('/api', mainpageApi)
router.use('/api/auth', authApiRouter)
router.use('/api/tournaments', tournamentsApiRouter)
router.use('/api/comments', commentsApi)




module.exports = router