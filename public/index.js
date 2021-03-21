const informationDisplay = document.getElementById('information-display')
    // Create a function to show fetched data
function showData(data) {
    const date = new Date().toDateString()
    informationDisplay.innerHTML = `
    <div class="main-content-container">
    <div class="secondary-main-content-container">
    <h4> ${date} </h4> 
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" crossorigin="anonymous">
    <p> ${data.weather[0].main}, ${data.weather[0].description}.</p>
    </div>
    <div class="secondary-main-content-container">
    <span class="city-title">${data.name},${data.sys.country}</span>
    <span>${Math.round(data.main.temp)}°C</span>
    <span>Feels like: ${Math.round(data.main.feels_like)}°C</span>
    </div>
    </div>
    <div class="thermalInfo">
    <p> Humidity: ${data.main.humidity}% </p> 
    <p>Max Temperature: ${Math.round(data.main.temp_max)}°C</p>
    <p>Min Temperature: ${Math.round(data.main.temp_min)}°C</p>
    <p> Wind speed : ${data.wind.speed} m/s</p>
    <p>Wind direction: ${data.wind.deg} degrees </p> 
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
                informationDisplay.innerHTML = 'Sorry, which planet is this city on?'
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
                informationDisplay.innerHTML = 'Oops, no weather detected in your location!'
            })
    }

    function error() {
        informationDisplay.innerHTML = 'Well done! I would not reveal my location either!'
    }
    navigator.geolocation.getCurrentPosition(success, error)
}

showNearby()