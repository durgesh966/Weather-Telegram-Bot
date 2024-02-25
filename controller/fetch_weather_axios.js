const axios = require('axios');

async function fetchWeatherData(city, country) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
}

module.exports = fetchWeatherData;