/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Weather5DaysStyle.css";

function WeatherInfo5Days({ weather5Days }) {
  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("en-us", { weekday: "long" });
    return newDate;
  }

  return (
    <div className="weather-container">
      <h3>Next 5 days</h3>
      <div className="weather-list">
        {nextFiveDays.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p className="weekDays">{convertDate(forecast)}</p>
            <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt="weather icon" />
            <p>{forecast.weather[0].description}</p>
            <p>
              Min {Math.round(forecast.main.temp_min)}°C / Max {Math.round(forecast.main.temp_max)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInfo5Days;
