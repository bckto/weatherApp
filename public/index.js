const infoDiv = document.getElementById('infoDiv')
    // Create a function to show fetched data
function showData(data) {
    const date = new Date().toDateString()
    infoDiv.innerHTML = `
  <h4> ${date} </h4> 
  <p class="cityTitle"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" crossorigin="anonymous">${data.name},${data.sys.country}</p>
  <span>${data.main.temp}°C</span>
  <div class="thermalInfo">
  <p> ${data.weather[0].main}, ${data.weather[0].description}.</p>
  <p> Humidity: ${data.main.humidity}% </p> 
  <p>Feels like: ${data.main.feels_like}°C</p>
  <p>Max Temperature: ${data.main.temp_max}°C</p>
  <p>Min Temperature: ${data.main.temp_min}°C</p>
  <p> Wind speed : ${data.wind.speed} m/s</p>
  <p>Wind direction: ${data.wind.deg} degrees </p> 
  </div>
  `
}

// Create function to get city name from input and return information used in showData
function getCity() {
    const cityButton = document.getElementById('sendCity')
    cityButton.addEventListener('click', () => {
        const cityValue = document.getElementById('city-name').value
        fetch(`http://localhost:3000/search/${cityValue}`)
            .then((res) => res.json())
            .then((data) => showData(data))
            .catch(() => {
                infoDiv.innerHTML = 'Sorry, which planet is this city on?'
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
                infoDiv.innerHTML = 'Oops, no weather detected in your location!'
            })
    }

    function error() {
        infoDiv.innerHTML = 'Well done! I would not reveal my location either!'
    }
    navigator.geolocation.getCurrentPosition(success, error)
}

showNearby()