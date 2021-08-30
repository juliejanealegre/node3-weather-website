const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f'
    const url = 'http://api.weatherstack.com/current?access_key=111363f971f27e3eac3d047035af0156&query=' + latitude + ',' + longitude + '&units=f'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
            callback(undefined, 
            body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + 
            body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%" )
        }
    })
}

module.exports = forecast