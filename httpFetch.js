
const url = 'https://goweather.herokuapp.com/weather/'

export async function getWeatherResponse(city) {
    const response = await fetch(url + city)
    if(response.ok){
        const result = await response.json()
        return result
    } else {
        console.log('Request failed!')
        return
    }
}