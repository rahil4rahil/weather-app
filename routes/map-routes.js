const express = require('express')
const cityFinder = require('../cities-finder')
const weatherApi = require('../weather-api')

const router = express.Router()

router.post('/', (req, res, next) => {
    // res.setHeader('content-type', 'application/json')
    // req.setHeader('Access-Control-Allow-Origin', '*')
    // req.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    cityFinder.getCityDataByName(req.body.cityName, (cityResults) => {
        weatherApi.getWeatherData(cityResults.lat, cityResults.long).then((response) => {
            res.json(response)
        })
    })
})

module.exports = router