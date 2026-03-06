const API_KEY = "7b41a6a2eb61052d78849b6b7eb4a05c";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

let recentSearches = [];
const cityInput = document.getElementById("cityInput");
const btnSearch = document.getElementById("btnSearch");
const errorMessage = document.getElementById("errorMessage");
const loadingState = document.getElementById("loadingState");
const weatherCard = document.getElementById("weatherCard");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const weatherDesc = document.getElementById("weatherDesc");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const feelsLike = document.getElementById("feelsLike");
const recentSearchesEl = document.getElementById("recentSearches");
const recentList = document.getElementById("recentList");

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function showError(message) {
  show(errorMessage);
  hide(loadingState);
  hide(weatherCard);
  errorMessage.innerHTML = message;
}

function clearError() {
  hide(errorMessage);
  errorMessage.textContent = "";
}

function setBackground(weatherMain) {
  document.body.classList.remove("clear", "clouds", "rain", "snow", "thunder");
  const condition = weatherMain.toLowerCase();
  switch (condition) {
    case "clear":
      document.body.classList.add("clear");
      break;
    case "clouds":
      document.body.classList.add("clouds");
      break;
    case "rain":
    case "drizzle":
      document.body.classList.add("rain");
      break;
    case "snow":
      document.body.classList.add("snow");
      break;
    case "thunderstorm":
      document.body.classList.add("thunder");
      break;
  }
}
