const Event = require('../models/event')

class EventService {
    constructor(apiServerClient) {
        this.Event = new Event(apiServerClient)
    }

    async getEvent(req) {
        try {
            return await this.Event.getEvent(req)
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

    async putEvent(req) {
        try {
            return await this.Event.putEvent(req)
        } catch (e) {
            throw e
        }
    }
}

module.exports = EventService
