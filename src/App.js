import { React, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/InputComponent/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";

function App() {
  const apiKey = "ddc3e9233106e8aa660ef6501aae9ada";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data);
        const updatedData = {
          temperature: res.data.main.temp,
          tempMax: res.data.main.temp_max,
          tempMin: res.data.main.temp_min,
          cityName: res.data.name,
          sunRise: res.data.sys.sunrise,
          sunSet: res.data.sys.sunset,
          humidity: res.data.main.humidity,
          condition: res.data.weather[0].description,
          realFell: res.data.main.feels_like,
          windSpeed: res.data.wind.speed,
        };
        setData(updatedData);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const searchDetails = () => {
    getWeatherDetails(inputCity);
  };

  const changeInput = (value) => {
    setInputCity(value);
  };

  useEffect(() => {
    getWeatherDetails("delhi");
  }, []);

  return (
    <div className="app-container">
      <div className="container mx-auto mt-4 py-5 px-32 ">
        <TopButtons cityWeather={getWeatherDetails} />
        <Inputs searchData={searchDetails} input={changeInput} />

        <TimeAndLocation tempData={data} />
        <TemperatureAndDetails tempData={data} />
      </div>
    </div>
  );
}

export default App;
