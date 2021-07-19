import {getWeatherResponse} from './httpFetch.js'

const city = document.getElementById('city-select')
city.addEventListener('change',(e)=>{
    getWeather(city.value)
})

const temperature = document.getElementById('temperature')

async function getWeather(city){
    const weather = await getWeatherResponse(city)
    if(weather){
        temperature.textContent = weather.temperature
    }
}


