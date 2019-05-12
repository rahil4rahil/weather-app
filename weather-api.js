const request = require('request')
const weatherConstant = require('./constants')

const getWeatherData = (lat, long) => {
    let url = weatherConstant.WEATHER_URL + '/' + lat + ',' + long
    return new Promise((resolve, reject) => {
        request({ url: url, json:true }, (error, response) => {
            if (error) {
                reject(error)
            }
            if(response) {
                resolve(response.body)
            }
        })
    })
}

exports.getWeatherData = getWeatherData