// 1. Select elements
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherDisplay = document.getElementById("weather-display");

// 2. Add Event Listener
searchBtn.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

// 3. Create Async Function
// API Key (Use your own from OpenWeatherMap or use a mock for practice)
const API_KEY = "YOUR_API_KEY_HERE";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeather(city) {
    // TODO: Write try-catch block
    // TODO: Fetch data using fetch()
    // TODO: Await response
    // TODO: Check if city exists (response.ok)
    // TODO: Update DOM with data
}
