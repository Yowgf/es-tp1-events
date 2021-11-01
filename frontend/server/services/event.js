const Event = require('../models/event')

class EventService {
    constructor(apiServerClient) {
        this.Event = new Event(apiServerClient)
    }

    async getEvent() {
        try {
            return await this.Event.getEvent()
        } catch (e) {
            throw e
        }
    }

    async postEvent(req) {
        try {
            return await this.Event.postEvent(req)
        } catch (e) {
            throw e
        }
    }
}

module.exports = EventService
