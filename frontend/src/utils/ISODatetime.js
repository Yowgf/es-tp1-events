function ISODatetime() {
    this.Now = function() {
        const now = new Date()
        return now.getUTCFullYear() + '-' + now.getUTCMonth() + '-' + now.getUTCDay() +
            'T' + now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds()
    }
}

export default ISODatetime
