const WEATHER_API_KEY = "7639b0af030d8855d35593c151b4ecdd";
const COORDINATE = "coordinate";

const weather_container = document.querySelector(".js-weather");

function getWeather(lat, long){
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
  ).then(function(response){
    return response.json();
  }).then(function(json){
    console.log(json);
    const temp = json.main.temp;
    const pressure = json.main.pressure;
    const humidity = json.main.himidity;

    console.dir(weather_container);
    weather_container.textContent = `temp : ${temp} \n
    pressure : ${pressure} \n
    humidity : ${humidity}`;
  });
}

function getGeoSuccess(position){
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const coor_obj ={
    lat,
    long
  };

  console.log(lat);
  console.log(long);

  localStorage.setItem(COORDINATE, JSON.stringify(coor_obj));
  getWeather(lat, long);
}

function getGeoFailed(){
  console.log("get geolocation failed");
}

function getCoordinate(){
  navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoFailed);
}

function loadCoordinate(){
  const curr_coordinate = localStorage.getItem(COORDINATE);

  if(curr_coordinate === null){
    getCoordinate();
  }else {
    // console.log("fuck?");
    const parsedCoords = JSON.parse(curr_coordinate);
    console.log(parsedCoords);
    console.log(parsedCoords.lat);
    getWeather(parsedCoords.lat, parsedCoords.long);
  }
}

function init(){
  loadCoordinate();
}

init();
