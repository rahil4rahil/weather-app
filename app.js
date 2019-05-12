const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mapRoutes = require('./routes/map-routes')

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use(mapRoutes)

app.listen(3000, () => {
    console.log("Server started!")
})