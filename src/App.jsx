import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfo from "./components/WeatherInfos/WeatherInfo";
import WeatherInfo5Days from "./components/WeatherInfos5Days/WeatherInfo5Days";

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "1751cacca4184e7a7034d35a809c9e61";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
    const apiInfo = await axios.get(url);
    const apiInfo5Days = await axios.get(urlForecast);

    setWeather5Days(apiInfo5Days.data);
    setWeather(apiInfo.data);
  }

  return (
    <div className="container">
      <h1>See Weather</h1>
      <input ref={inputRef} type="text" placeholder="Enter a city." />
      <button onClick={searchCity}>Search</button>
      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
