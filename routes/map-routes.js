const express = require('express')
const cityFinder = require('../cities-finder')
const weatherApi = require('../weather-api')

const router = express.Router()

router.post('/getCityForecastData', (req, res, next) => {
    cityFinder.getCityDataByName(req.body.cityName, (cityResults) => {
        if (cityResults) {
            weatherApi.getWeatherData(cityResults.lat, cityResults.long).then((response) => {
                res.json(response)
            })
        }
        else {
            res.json({})
        }
    })
})

router.post('/getCitySearchList', (req, res, next) => {
    console.log(req.body)
    cityFinder.getFilterCityList(req.body.searchString, (resultList) => {
        console.log(resultList)
        res.json(resultList)
    })
})

module.exports = router