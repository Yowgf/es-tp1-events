const axios = require('axios')

class apiServerClient {

    constructor() {
        const APPLICATION_JSON_MIME_TYPE = 'application/json'

        this.instance = axios.create({
            // Notice that we need API_SERVER_URL to be defined in the environmment.
            baseURL: `${process.env.API_SERVER_URL}`,
            timeout: 10000,
            headers: {
                common: { Accept: APPLICATION_JSON_MIME_TYPE },
                post: { 'Content-Type': APPLICATION_JSON_MIME_TYPE },
                put: { 'Content-Type': APPLICATION_JSON_MIME_TYPE },
            },
        })

        this.instance.defaults.headers['Content-Type'] = APPLICATION_JSON_MIME_TYPE
    }

    async get(...args) {
        return this.instance.get(...args)
    }

    async post(...args) {
        return this.instance.post(...args)
    }

    async put(...args) {
        return this.instance.put(...args)
    }

    async getEvent() {
        const endpoint = '/event/'
        return await this.get(endpoint)
    }

    async postEvent(req) {
        return await this.post(req.originalUrl, req.body)
            .then(res => res)
            .catch(e => {
                throw e
            })
    }

    async putEvent(req) {
        return await this.put(req.originalUrl, req.body)
            .then(res => res)
            .catch(e => {
                throw e
            })
    }
}

module.exports = apiServerClient
