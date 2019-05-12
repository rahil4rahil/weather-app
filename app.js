const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mapRoutes = require('./routes/map-routes')

app.use(bodyParser.json());


app.use(mapRoutes)

app.listen(3000, () => {
    console.log("Server started!")
})