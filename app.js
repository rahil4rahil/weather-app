const request = require('request')

const url = "https://api.darksky.net/forecast/9dd78c634c08a2af1273f210c03cb100/37.8267,-122.4233"

request({ url: url }, (error, response) => {
    console.log(response)
})