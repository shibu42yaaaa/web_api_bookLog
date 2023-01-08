const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.post('/booklog', (req, res) => {
    res.json({
        "ok": true
    })
})

app.listen(port, () => {
    console.log('App Listening At http://localhost:${port}')
})