class Event {
    constructor(apiServerClient) {
        this.apiServerClient = apiServerClient
    }

    async getEvent(req) {
        return await this.apiServerClient
            .getEvent(req)
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

    async putEvent(req) {
        return await this.apiServerClient
            .putEvent(req)
            .then(res => res)
            .catch(e => {
                throw e
            })
    }
}

module.exports = Event
