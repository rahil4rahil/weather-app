const cities = require ('./cities')
const citiesName = require ('./cities-name')

const getCityDataByName = (cityName, callback) => {
    callback(cities[citiesName.indexOf(cityName.toLowerCase())])
}

const getFilterCityList = (cityName) => {
    return citiesName.filter((element) => { 
        if (element.indexOf(cityName) > -1) {
            return true
        }
    })
}

exports.getCityDataByName = getCityDataByName
exports.getFilterCityList = getFilterCityList