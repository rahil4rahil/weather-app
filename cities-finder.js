const cities = require ('./cities')
const citiesName = require ('./cities-name')

const getCityDataByName = (cityName, callback) => {
    callback(cities[citiesName.indexOf(cityName.toLowerCase())])
}

const getFilterCityList = (cityName, callback) => {
    let citySearchArray =  cities.filter((element) => { 
        if (element.city.toLowerCase().indexOf(cityName.toLowerCase()) > -1) {
            return true
        }
    })
    callback(citySearchArray)
}

exports.getCityDataByName = getCityDataByName
exports.getFilterCityList = getFilterCityList