const express = require('express')
const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '2213b30069b740318afa9809ce40284f',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 4205

app.listen(port, () => console.log(`servin up on ${port}`))