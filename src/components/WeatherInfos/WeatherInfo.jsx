/* eslint-disable react/prop-types */

import "./WeatherStyle.css";

function WeatherInfo({ weather }) {
  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
        <p className="temp">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="desc">{weather.weather[0].description}</p>

      <div className="details">
        <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
