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
