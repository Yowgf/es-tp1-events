const EventService = require('../services/event')
const apiServerClient = require('../client/apiServer')

const getEvent = async (_, res, next) => {
    try {
        const eventService = new EventService(new apiServerClient())
        const eventGetResponse = await eventService.getEvent()
        console.log(eventGetResponse.data)
        res.status(200).send(eventGetResponse.data)
    } catch (e) {
        next(e)
    }
}

const postEvent = async (req, res, next) => {
    try {
        const eventService = new EventService(new apiServerClient())
        const eventPostResponse = await eventService.postEvent(req)
        res.status(200).send(eventPostResponse.data)
    } catch (e) {
        next(e)
    }
}

module.exports = {
    getEvent,
    postEvent,
}
