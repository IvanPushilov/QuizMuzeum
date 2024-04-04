const router = require('express').Router();
const authApiRouter = require('./api/authApi')
const tournamentsApiRouter = require('./api/tournamentsApi')

router.use('/api/auth', authApiRouter)
router.use('/api/tournaments', tournamentsApiRouter)

module.exports = router