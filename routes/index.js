const router = require('express').Router()

router.use('/api', require('./savedbookRoutes'))
router.use('/api', require('./apibookRoutes'))

module.exports = router
