# VanillaJS - Weather App

### Description 
A simple weather app using vanilla javascript implementation with Express.

### Objective 
The purpose of this exercise was to practice DOM manipulation while making usage of an external API.

### Features 
- Display current weather accordion to the user geolocation (when allowed by the user)
- Searchbox to look for current weather on any other city available in the weather API. 
- Display max and min temperature 
- Display thermal sensation
- Display humidity percentage
- Display Wind speed 
- Display Wind direction 

## How to use

### You will need: 
- [nodejs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installing and running 

Step 1: On your terminal/console clone this repository with SSH : `git clone git@github.com:bckto/weatherApp.git`  
Step 2: Once cloned, you will have to install the node_modules: `npm run install`  
Step 3: Now the magic happens, type `npm start` on your terminal and it should start the server on `localhost:3000`.  

### I did all that but it is not working... 

Here comes the tricky part, if you want to run the app by yourself you will need your own key from [open Weather](https://openweathermap.org/).  
The good part is: it's completely free.   
The bad part is: well, the next step is tedious.  
Once you have your token you will be able to change the file `server.js`.
Fill in your token where it says userID at `APPID=${userId}`.  
Save your file and open your terminal, type `npm start`. 
App should be up and running on `localhost:3000`. 

### P.S.
The app was made with small devices in mind. Thus it is recommended to use it in small screens.

## Version

### V2.0 (Most recent)
- Complete UI revamp 
- Using flexbox
- Responsiveness for smaller screens works as expected
- Fixed issues with accessibility
- Fixed hierarchy of informations

### V 1.0 
- Connect to the API 
- Display current weather
- Display weather acording to geolocation when allowed
- Display other informations related to the weather (Max-min temp, thermal sensation...)

## How does the app look like? 

### Newest 2.0 version
![weatherAppV2 0](https://user-images.githubusercontent.com/61417617/111923709-b9b55000-8aa0-11eb-9a4b-3becb14f6916.png)
### First 1.0 version 
![weatherAppV1 0](https://user-images.githubusercontent.com/61417617/111923222-6b9f4d00-8a9e-11eb-8ee3-386acec5e94f.png)