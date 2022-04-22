const url = 'https://api.openweathermap.org/data/2.5/'
const key = '3f40c2955752bab42ef9f84088cae0af'

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}


const displayResult = (result) => {
    console.log(result)

    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let humidity = document.querySelector('.humidity')
    humidity.innerText = `Nem : ${result.main.humidity}%`

}
