class Event {
    constructor(apiServerClient) {
        this.apiServerClient = apiServerClient
    }

    async getEvent() {
        return await this.apiServerClient
            .getEvent()
            .then(res => res)
            .catch(e => {
                throw e
            })
    }

    async postEvent(req) {
        return await this.apiServerClient
            .postEvent(req)
            .then(res => res)
            .catch(e => {
                throw e
            })
    }
}

module.exports = Event
