const API_KEY = "5cade099fdf6ae90a6b98f749162b377";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      weather.innerText = `${parseInt(json.main.temp)}℃ @ ${json.name}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem("coords", JSON.stringify(coordsObj));
}
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("can't access location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
