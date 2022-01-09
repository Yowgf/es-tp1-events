const express = require('express')
require('dotenv').config()

const eventRouter = require('./routers/event')

PORT = process.env.PORT || 3001
const app = express()

app.disable('etag');

// Please set all the base routers in place here
app.use('/event', eventRouter)

// Necessary to refresh requests, otherwise will get 304 status
app.get('/*', function(_, res, next){ 
    res.setHeader('Last-Modified', (new Date()).toUTCString())
    next();
})

app.listen(PORT, () => {
    console.log(`Frontend server listening on port ${PORT}`)
})
