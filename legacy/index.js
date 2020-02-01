const express = require('express')
const app = express()

app.use('/', (req, res, next) => {
    console.log(`Request Type: ${req.method} called on path ${req.path}`)
    next()
})

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/home.html')
})

app.get('/next', function (req, res) {
    res.sendFile(__dirname+'/first.html')
})
app.listen(3000, () => {
    console.log('Beginning server')
    console.log('    [INFO] Server running on port: ' + 3000)
})