const informationDisplay = document.getElementById('information-display')
    // Create a function to show fetched data
function showData(data) {
    const date = new Date().toDateString()
    informationDisplay.innerHTML = `
    <div class="main-content-container">
    <div class="secondary-main-content-container">
    <span class="date"> ${date} </span> 
    <img src="http://openweathermap.org/img/wn/${
        data.weather[0].icon
    }.png" class="forecast-img"  alt="Current weather image, ${data.weather[0].description}" crossorigin="anonymous">
    <span class="weather-description"> ${data.weather[0].main}</span>
    <span class="weather-description"> ${data.weather[0].description}.</span>
    </div>
    <div class="secondary-main-content-container">
    <span class="city-title">${data.name},${data.sys.country}</span>
    <span class="city-temperature">${Math.round(data.main.temp)}°C</span>
    <span class="city-thermal-sensation">Feels like ${Math.round(data.main.feels_like)}°C</span>
    </div>
    </div>
    <div class="thermal-column">
    <div class="thermal-display">
    <span class="thermal-display-title">Max temp</span>
    <span class="thermal-display-title">Min temp</span>
    <span class="thermal-display-title">Humidity</span> 
    </div>
    <div class="thermal-display">
    <span class="thermal-display-text">${Math.round(data.main.temp_max)}°C</span>
    <span class="thermal-display-text">${Math.round(data.main.temp_min)}°C</span>
    <span class="thermal-display-text">${data.main.humidity}% </span>
    </div>
    </div>
    <div class="thermal-column">
    <div class="thermal-display">
    <span class="thermal-display-title"> Wind speed </span>
    <span class="thermal-display-title">Wind direction </span> 
    <span class="thermal-display-title">Visibility </span> 
    </div>
    <div class="thermal-display">
    <span class="thermal-display-text">${data.wind.speed} m/s</span>
    <span class="thermal-display-text"> ${data.wind.deg} degrees </span>
    <span class="thermal-display-text"> ${data.visibility / 1000}km</span>
    </div>
    </div>
    `
}

// Create function to get city name from input and return information used in showData
function getCity() {
    const cityButton = document.getElementById('city-information')
    cityButton.addEventListener('click', () => {
        const cityValue = document.getElementById('city-name').value
        fetch(`http://localhost:3000/search/${cityValue}`)
            .then((res) => res.json())
            .then((data) => showData(data))
            .catch(() => {
                informationDisplay.innerHTML = '<span>Sorry, which planet is this city on?</span>'
            })
    })
}

getCity()

// Create function to show Nearby forecast with HTML geolocation settings
function showNearby() {
    function success(position) {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        fetch(`http://localhost:3000/nearby/?lat=${lat}&lon=${lon}`)
            .then((res) => res.json())
            .then((data) => showData(data))
            .catch(() => {
                informationDisplay.innerHTML = '<span>Oops, no weather detected in your location!</span>'
            })
    }

    function error() {
        informationDisplay.innerHTML = 'Well done! I would not reveal my location either!'
    }
    navigator.geolocation.getCurrentPosition(success, error)
}

showNearby()