const express = require('express')
const handler = require('../handlers/event')
const router = express.Router()

const EVENT_ROOT_PATH = '/'
router.get(EVENT_ROOT_PATH, handler.getEvent)
router.post(EVENT_ROOT_PATH + "list/*", handler.postEvent)

router.use((err, req, res, next) => {
    console.log(err)
})

module.exports = router
