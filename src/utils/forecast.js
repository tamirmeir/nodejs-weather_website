const request = require('request')

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude,longitude,callback) => {
    //const url='http://api.weatherstack.com/current?access_key=f21eb745db61ec61ad94b0ffa21ded23&query=37.8267,-122.4233&units=m'
    const url='http://api.weatherstack.com/current?access_key=f21eb745db61ec61ad94b0ffa21ded23&query=' + latitude + ',' + longitude + '&units=m'
    request({url,json:true},(error,{body})=> {
        if (error)
        {
          callback('Unable to connect to the weather service!',undefined)
        } else if (body.error){
            callback('Unable to find location. Try another search.',undefined)
        }
        else{
            const current = body.current
            const message = "The temperature: " + current.temperature
            callback(undefined,message)
            // callback(undefined,{
            //    feelslike:current.feelslike,
            //    temperature:current.temperature,
            //    weatherDesc:current.weather_descriptions[0]
            // })
        }

    })
}

module.exports = forecast