const express = require('express')
require('dotenv').config()

const eventRouter = require('./routers/event')

PORT = process.env.PORT || 3001
const app = express()

// Here we set all the routers in place
app.use('/event', eventRouter)

app.listen(PORT, () => {
    console.log(`Frontend server listening on port ${PORT}`)
})
