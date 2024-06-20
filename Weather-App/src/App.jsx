import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const search = async (city) => {
    if (city === "") {
      alert("Please enter the City name");
    }

    try {
      const API_KEY = "6e9f08f08e2d8c72e76a80ecddc2b878";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        temperature: data.main.temp,
        windSpeed: data.wind.speed,
        cityName: data.name,
        errors: data.cod,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Something went wrong");
    }
  };

  useEffect(() => {
    search("Delhi");
  }, []);
  return (
    <div className="container">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Enter your city" />
        <button onClick={() => search(inputRef.current.value)}>Search</button>
      </div>

      {weatherData ? (
        <>
          {" "}
          <div className="weather-details">
            <h1>
              {weatherData.temperature}
              <sup> o</sup>
            </h1>
            <h2>{weatherData.cityName}</h2>
            <div className="weather">
              <div className="humidity">
                <div> {weatherData.humidity}%</div>
                <div>Humidity</div>
              </div>
              <div className="wing-speed">
                <div> {weatherData.windSpeed} km/h</div>
                <div>Wind speed</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
