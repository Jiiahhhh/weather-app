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

function loadRecentSearches() {
  const data = localStorage.getItem("recentSearches");
  return data ? JSON.parse(data) : [];
}

function saveRecentSearch(city) {
  recentSearches = recentSearches.filter(
    (c) => c.toLowerCase() !== city.toLowerCase(),
  );
  recentSearches.unshift(city);
  recentSearches = recentSearches.slice(0, 5);
  localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
}

function renderRecentSearches() {
  if (recentSearches.length === 0) {
    hide(recentSearchesEl);
    return;
  }

  recentList.innerHTML = recentSearches
    .map(
      (city) =>
        `<button class="recent-btn" data-city="${city}">${city}</button>`,
    )
    .join("");
  show(recentSearchesEl);
}

function renderWeather(data) {
  cityName.textContent = `${data.name}, ${data.sys.country}`;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed} m/s`;
  weatherDesc.textContent = `${data.weather[0].description}`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  setBackground(data.weather[0].main);
  show(weatherCard);
}
