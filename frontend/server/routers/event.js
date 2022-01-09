const express = require('express')
const handler = require('../handlers/event')
const router = express.Router()

const EVENT_ROOT_PATH = '/'

router.get(EVENT_ROOT_PATH + ":eventId", handler.getEvent)
router.get(EVENT_ROOT_PATH, handler.getEvents)

router.post(EVENT_ROOT_PATH, handler.postEvent)
router.put(EVENT_ROOT_PATH, handler.putEvent)

router.use((err, req, res, next) => {
    // TODO: improve logging -aholmquit 2021-11-05
    console.log(err)
})

module.exports = router
