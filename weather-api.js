const request = require('request')
const weatherConstant = require('./constants')

const getWeatherData = (lat, long) => {
    let url = weatherConstant.WEATHER_URL + '/' + weatherConstant.DARK_SKY_ACCESS_TOKEN + '/' + lat + ',' + long + "?units=si"
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