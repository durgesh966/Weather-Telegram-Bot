function weather_icon(weather_icon_code) {
    if (weather_icon_code === "01d") {
        return "☀️"; 
    } else if (weather_icon_code === "01n") {
        return "🌙";
    } else if (weather_icon_code === "02d" || weather_icon_code === "02n") {
        return "⛅";
    } else if (weather_icon_code === "03d" || weather_icon_code === "03n") {
        return "🌥️";
    } else if (weather_icon_code === "04d" || weather_icon_code === "04n") {
        return "☁️";
    } else if (weather_icon_code === "09d" || weather_icon_code === "09n") {
        return "🌧️"; 
    } else if (weather_icon_code === "10d" || weather_icon_code === "10n") {
        return "🌧️";
    } else if (weather_icon_code === "11d" || weather_icon_code === "11n") {
        return "⛈️";
    } else if (weather_icon_code === "13d" || weather_icon_code === "13n") {
        return "❄️";
    } else if (weather_icon_code === "50d" || weather_icon_code === "50n") {
        return "🌫️";
    } else {
        return "❓";
    }
}

module.exports = weather_icon;

