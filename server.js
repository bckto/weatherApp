const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;
const fetch = require('node-fetch');

const userId = process.env.APP_ID;

app.use(express.static('public'));
// First endpoint with dynamic path to use city name
app.get('/search/:city', (req, res) => {
    const city - name = req.params.city;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city-name}&APPID=${userId}&units=metric`)
        .then(response => response.json())
        .then(data => {
            res.status(200).send(data);
        })
        .catch(data => {
            res.status(404).send(data);
        });
});

// Second endpoint to fetch nearby forecast from API
app.get('/nearby', (req, res) => {
    const { lat, lon } = req.query;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${userID}&units=metric`)
        .then(response => response.json())
        .then(data => res.status(200).send(data))
        .catch(data => res.status(404).send(data));
});

app.listen(port, () => console.log('Server listening on port ' + port));